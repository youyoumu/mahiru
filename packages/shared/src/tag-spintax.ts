export function parseTagSpintax(input: string) {
  const attachRegex = /\{attach:(.*?)\}/g;
  const chooseRegex = /\{choose:(.*?)\}/g;

  const attach: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = attachRegex.exec(input)) !== null) {
    const value = match[1]?.trim();
    if (value) {
      attach.push(value);
    }
  }

  const choose: string[] = [];
  while ((match = chooseRegex.exec(input)) !== null) {
    const inner = match[1];
    if (inner) {
      const options = inner
        .split("|")
        .map((opt) => opt.trim())
        .filter(Boolean);
      choose.push(...options);
    }
  }

  return { attach, choose };
}
