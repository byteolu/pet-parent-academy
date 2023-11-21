/*
  Warnings:

  - You are about to drop the column `category` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `difficulty` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "difficulty" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "images" TEXT
);
INSERT INTO "new_Exercise" ("id", "images", "instructions", "name") SELECT "id", "images", "instructions", "name" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
