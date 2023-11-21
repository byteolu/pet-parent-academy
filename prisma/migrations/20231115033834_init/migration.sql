-- CreateTable
CREATE TABLE "Dogrecipies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "difficulty" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "images" TEXT
);
