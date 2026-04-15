import { env } from "#/env";
try {
  const res = await fetch(`http://localhost:${env.PORT}/health`);
  if (res.status === 200) {
    process.exit(0);
  }
  process.exit(1);
} catch {
  process.exit(1);
}
