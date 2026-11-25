import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast: the touchscreen sells ads, the cold is a side job.
const line =
  "My fridge's touchscreen now shows ads for yogurt. " +
  "I bought a fridge, not a billboard that keeps my food cold as a side job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
