# Custom Prompt Syntax

This bot supports **spintax** (spin syntax) for custom prompts, allowing you to create multiple variations of a single prompt. Each time the bot uses your prompt, it will randomly select from the variations you define.

## Basic Syntax

### Simple Variations

Use curly braces `{}` with pipe `|` to define multiple options. One will be chosen at random each time.

```
{Hello|Hi|Hey} there!
```

Possible outputs:
- `Hello there!`
- `Hi there!`
- `Hey there!`

### Weighted Variations

Add a number prefix followed by `:` to control how often an option appears. The number represents the probability percentage.

```
{70:formal|20:casual|10:friendly} greeting
```

- `formal greeting` — appears ~70% of the time
- `casual greeting` — appears ~20% of the time
- `friendly greeting` — appears ~10% of the time

### Partial Probability

Use a single weighted option to make it appear only a percentage of the time:

```
{30:with extra detail}
```

- `with extra detail` — appears ~30% of the time
- _(empty)_ — appears ~70% of the time

### Mixed Syntax

You can combine weighted and unweighted options. Unweighted options default to weight `1`.

```
{50:fast|quick}
```

- `fast` — appears ~98% of the time (50/(50+1))
- `quick` — appears ~2% of the time (1/(50+1))

### Multiple Groups

Use multiple spintax groups in a single prompt for exponentially more combinations.

```
Write a {short|long} {story|article|post} about AI.
```

This creates 6 possible combinations (2 × 3).

### Escaping Special Characters

Use `\` to escape special characters (`{`, `}`, `|`, `:`, `\`) when you want them to appear literally in your prompt.

| Escape | Output |
|--------|--------|
| `\{` | `{` |
| `\}` | `}` |
| `\|` | `\|` |
| `\:` | `:` |
| `\\` | `\` |

Example:
```
Explain operators like {AND|OR|\|\|} in programming.
```

Output:
- `Explain operators like AND in programming.`
- `Explain operators like OR in programming.`
- `Explain operators like || in programming.`

## Real-World Examples

### Greeting Variations
```
{Hello|Hi|Hey|Greetings} {there|friend}, {80:how are you today?|15:hope you're doing well!|5:what can I help with?}
```

### Email Generation
```
{70:Please write|20:Could you write|10:I need} a {80:friendly|20:professional} email to {50:the team|30:my manager|20:the client} about {60:the project deadline|40:the budget update}.
```

### Marketing Copy
```
{50:Discover|30:Experience|20:Unlock} the {70:power|30:potential} of our new product and {40:transform|30:improve|30:enhance} your {business|workflow|daily routine} today!
```

### Technical Content
```
Explain the difference between {C++|Java|Python} and how to use {operators like \|\||functions|classes}.
```

## Tips

- **Weights don't need to sum to 100** — they're treated as relative proportions
- **Combine groups wisely** — too many groups can create hundreds of combinations
- **Use partial probability** — `{20:something}` is great for optional additions
- **Test your prompts** — run them multiple times to verify the distribution feels right
