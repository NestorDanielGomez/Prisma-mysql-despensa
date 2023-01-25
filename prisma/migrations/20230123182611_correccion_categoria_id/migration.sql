/*
  Warnings:

  - You are about to drop the column `cateogiaId` on the `producto` table. All the data in the column will be lost.
  - Added the required column `categoriaId` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `producto` DROP FOREIGN KEY `Producto_cateogiaId_fkey`;

-- AlterTable
ALTER TABLE `producto` DROP COLUMN `cateogiaId`,
    ADD COLUMN `categoriaId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
