import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
// The program writes exactly one funny line (70 chars) to /output/entry.txt.

const LINE = "I asked the AI to write my resignation letter; it quit first.";

// Gate: the entry must be 1-200 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
