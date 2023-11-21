/*
  Warnings:

  - Added the required column `instructions` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "category" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "images" TEXT
);
INSERT INTO "new_Exercise" ("category", "id", "images", "name") SELECT "category", "id", "images", "name" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
