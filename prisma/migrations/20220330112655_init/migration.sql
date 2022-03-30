-- CreateTable
CREATE TABLE `Users` (
    `username` VARCHAR(16) NOT NULL,
    `password` VARCHAR(18) NULL,
    `token` VARCHAR(100) NULL,
    `secret_key` VARCHAR(100) NULL,
    `jurisdiction` VARCHAR(100) NULL,

    UNIQUE INDEX `Users_username_key`(`username`),
    UNIQUE INDEX `Users_token_key`(`token`),
    UNIQUE INDEX `Users_secret_key_key`(`secret_key`),
    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
