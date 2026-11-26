import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Star, Five Stars for the Food — alien tourist one-star review of Earth.
// One sentence, 185 characters: a complaint that reverses into staying,
// because one plate of rendang in Padang was worth burning the return ticket.
const ENTRY =
  "One star: Earth taxed my oxygen, lost my luggage to gravity, and mocked my third eye — but one plate of rendang in Padang and I have burned my return ticket and applied for citizenship.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate ourselves the same way the sealed scorer does: 1–200 characters,
// not only whitespace, exactly one sentence.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
