/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[user_id]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `token` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `secret_key` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jurisdiction` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    ADD COLUMN `user_id` VARCHAR(24) NOT NULL DEFAULT '',
    MODIFY `password` VARCHAR(18) NOT NULL,
    MODIFY `token` VARCHAR(100) NOT NULL,
    MODIFY `secret_key` VARCHAR(100) NOT NULL,
    MODIFY `jurisdiction` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`user_id`);

-- CreateTable
CREATE TABLE `OrdersMain` (
    `main_id` VARCHAR(255) NOT NULL DEFAULT '',
    `createTime` VARCHAR(255) NOT NULL,
    `totalPrice` DOUBLE NOT NULL,
    `customName` VARCHAR(255) NOT NULL,
    `customAdress` VARCHAR(255) NOT NULL,
    `customPhone` VARCHAR(255) NOT NULL,
    `additonDemo` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `OrdersMain_main_id_key`(`main_id`),
    PRIMARY KEY (`main_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrdersSecond` (
    `main_id` VARCHAR(255) NOT NULL,
    `second_id` VARCHAR(255) NOT NULL DEFAULT '',
    `order_product_name` VARCHAR(255) NOT NULL,
    `order_product_price` DOUBLE NOT NULL,
    `order_product_number` BIGINT NOT NULL,

    UNIQUE INDEX `OrdersSecond_main_id_key`(`main_id`),
    UNIQUE INDEX `OrdersSecond_second_id_key`(`second_id`),
    PRIMARY KEY (`second_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrderProduction` (
    `product_id` VARCHAR(255) NOT NULL DEFAULT '',
    `product_info` VARCHAR(255) NOT NULL,
    `product_name` VARCHAR(255) NOT NULL,
    `product_price` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `OrderProduction_product_id_key`(`product_id`),
    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Users_user_id_key` ON `Users`(`user_id`);
