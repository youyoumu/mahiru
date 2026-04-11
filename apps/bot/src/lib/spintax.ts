interface SpintaxOption {
  text: string;
  weight: number;
}

interface ParsedSpintax {
  type: "text";
  value: string;
}

interface ParsedSpintaxGroup {
  type: "group";
  options: SpintaxOption[];
}

type ParsedSpintaxNode = ParsedSpintax | ParsedSpintaxGroup;

const ESCAPE_CHARS: Record<string, string> = {
  "{": "{",
  "}": "}",
  "|": "|",
  ":": ":",
  "\\": "\\",
};

function unescapeText(text: string): string {
  return text.replace(/\\([{}|:\\])/g, (_, char) => ESCAPE_CHARS[char] ?? char);
}

function parseSpintax(text: string): ParsedSpintaxNode[] {
  const nodes: ParsedSpintaxNode[] = [];
  let current = "";
  let i = 0;

  while (i < text.length) {
    const nextChar = text[i + 1];
    if (text[i] === "\\" && nextChar !== undefined && nextChar in ESCAPE_CHARS) {
      current += text[i] + nextChar;
      i += 2;
    } else if (text[i] === "{") {
      if (current.length > 0) {
        nodes.push({ type: "text", value: unescapeText(current) });
        current = "";
      }

      const { content, endIndex } = extractBraceContent(text, i);
      const options = parseOptions(content);
      nodes.push({ type: "group", options });
      i = endIndex + 1;
    } else {
      current += text[i];
      i++;
    }
  }

  if (current.length > 0) {
    nodes.push({ type: "text", value: unescapeText(current) });
  }

  return nodes;
}

function extractBraceContent(
  text: string,
  startIndex: number,
): { content: string; endIndex: number } {
  let depth = 0;
  let i = startIndex;

  while (i < text.length) {
    const nextChar = text[i + 1];
    if (text[i] === "\\" && nextChar !== undefined && nextChar in ESCAPE_CHARS) {
      i += 2;
    } else if (text[i] === "{") depth++;
    else if (text[i] === "}") {
      depth--;
      if (depth === 0) {
        return { content: text.slice(startIndex + 1, i), endIndex: i };
      }
    }
    i++;
  }

  // Unmatched brace, treat as literal text
  return { content: text.slice(startIndex + 1), endIndex: text.length - 1 };
}

function parseOptions(content: string): SpintaxOption[] {
  const segments = splitOptions(content);

  const hasWeight = segments.some((seg) => /^\d+:/.test(seg.trim()));

  if (hasWeight) {
    const options = segments.map((seg) => {
      const match = seg.trim().match(/^(\d+):(.+)$/);
      if (match?.[1] !== undefined && match?.[2] !== undefined) {
        return { text: unescapeText(match[2].trim()), weight: Number.parseInt(match[1], 10) };
      }
      return { text: unescapeText(seg.trim()), weight: 1 };
    });

    // Single weighted option: add implicit empty option for remaining probability
    if (options.length === 1 && options[0]?.weight !== undefined) {
      const weight = options[0].weight;
      if (weight < 100) {
        options.push({ text: "", weight: 100 - weight });
      }
    }

    return options;
  }

  return segments.map((seg) => ({ text: unescapeText(seg.trim()), weight: 1 }));
}

function splitOptions(content: string): string[] {
  const options: string[] = [];
  let current = "";
  let depth = 0;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (char === undefined) continue;
    const nextChar = content[i + 1];

    if (char === "\\" && nextChar !== undefined && nextChar in ESCAPE_CHARS) {
      current += char + nextChar;
      i++;
    } else if (char === "{") {
      depth++;
      current += char;
    } else if (char === "}") {
      depth--;
      current += char;
    } else if (char === "|" && depth === 0) {
      options.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  if (current.length > 0) {
    options.push(current);
  }

  return options;
}

function weightedRandom(options: SpintaxOption[]): string {
  const totalWeight = options.reduce((sum, opt) => sum + opt.weight, 0);
  let random = Math.random() * totalWeight;

  for (const option of options) {
    random -= option.weight;
    if (random <= 0) {
      return option.text;
    }
  }

  return options[options.length - 1]?.text ?? "";
}

export function processSpintax(text: string): string {
  const nodes = parseSpintax(text);
  let result = "";

  for (const node of nodes) {
    if (node.type === "text") {
      result += node.value;
    } else {
      result += weightedRandom(node.options);
    }
  }

  return result;
}

export function getAllVariations(text: string): string[] {
  const nodes = parseSpintax(text);
  const groups = nodes.filter((n): n is ParsedSpintaxGroup => n.type === "group");

  if (groups.length === 0) {
    return [text];
  }

  const combinations: string[][] = groups.map((group) =>
    group.options.map((opt) => unescapeText(opt.text)),
  );

  return cartesianProduct(combinations).map((combination) => {
    let result = text;
    let groupIndex = 0;

    for (const node of nodes) {
      if (node.type === "group") {
        const replacement = combination[groupIndex];
        if (replacement !== undefined) {
          result = result.replace(/{[^{}]+}/, replacement);
        }
        groupIndex++;
      }
    }

    return unescapeText(result);
  });
}

function cartesianProduct<T>(arrays: T[][]): T[][] {
  return arrays.reduce<T[][]>((acc, curr) => acc.flatMap((a) => curr.map((b) => [...a, b])), [[]]);
}
