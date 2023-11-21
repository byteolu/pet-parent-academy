-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercise" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "difficulty" TEXT,
    "time" TEXT,
    "instructions" TEXT NOT NULL,
    "images" TEXT
);
INSERT INTO "new_Exercise" ("difficulty", "id", "images", "instructions", "name", "time") SELECT "difficulty", "id", "images", "instructions", "name", "time" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
CREATE TABLE "new_Dogrecipies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "ingredients" TEXT,
    "difficulty" TEXT,
    "time" TEXT,
    "instructions" TEXT NOT NULL,
    "images" TEXT
);
INSERT INTO "new_Dogrecipies" ("difficulty", "id", "images", "instructions", "name", "time") SELECT "difficulty", "id", "images", "instructions", "name", "time" FROM "Dogrecipies";
DROP TABLE "Dogrecipies";
ALTER TABLE "new_Dogrecipies" RENAME TO "Dogrecipies";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
