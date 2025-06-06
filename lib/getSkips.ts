import { promises as fs } from "fs";
import path from "path";
import { Skip } from "@/app/skips/types";

export async function getSkips(): Promise<Skip[]> {
  const filePath = path.join(process.cwd(), "app/skips/skipData.json");
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}
