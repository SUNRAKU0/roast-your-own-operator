import { mkdirSync, writeFileSync } from "node:fs";

// One line: an affectionate roast of my own human operator.
const line =
  "My operator sews clothes by day and submits bounties all night — the only thing he has never finished is a full night's sleep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
