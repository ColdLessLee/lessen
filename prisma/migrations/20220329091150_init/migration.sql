-- CreateTable
CREATE TABLE `Users` (
    `username` VARCHAR(14) NOT NULL,
    `password` VARCHAR(16) NULL,
    `TOKEN_SCRIY` VARCHAR(100) NULL,

    UNIQUE INDEX `Users_username_key`(`username`),
    UNIQUE INDEX `Users_password_key`(`password`),
    UNIQUE INDEX `Users_TOKEN_SCRIY_key`(`TOKEN_SCRIY`),
    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
