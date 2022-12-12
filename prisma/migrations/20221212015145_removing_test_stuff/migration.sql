/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `_CategoryToPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FavoritePost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_B_fkey";

-- DropForeignKey
ALTER TABLE "_FavoritePost" DROP CONSTRAINT "_FavoritePost_A_fkey";

-- DropForeignKey
ALTER TABLE "_FavoritePost" DROP CONSTRAINT "_FavoritePost_B_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "authorId";

-- DropTable
DROP TABLE "_CategoryToPost";

-- DropTable
DROP TABLE "_FavoritePost";
