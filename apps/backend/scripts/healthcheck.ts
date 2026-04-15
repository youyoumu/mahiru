try {
  const res = await fetch("http://localhost:8100/health");
  if (res.status === 200) {
    process.exit(0);
  }
  process.exit(1);
} catch {
  process.exit(1);
}
