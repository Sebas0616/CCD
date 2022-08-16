SET FOREIGN_KEY_CHECKS = 0
; 
/* Drop Tables */

DROP TABLE IF EXISTS `Categoria` CASCADE
;

DROP TABLE IF EXISTS `Ingrediente` CASCADE
;

DROP TABLE IF EXISTS `Menu` CASCADE
;

DROP TABLE IF EXISTS `Menu_Producto` CASCADE
;

DROP TABLE IF EXISTS `Pedido` CASCADE
;

DROP TABLE IF EXISTS `Pedido_Menu` CASCADE
;

DROP TABLE IF EXISTS `Producto` CASCADE
;

DROP TABLE IF EXISTS `Producto_Ingrediente` CASCADE
;

DROP TABLE IF EXISTS `Restaurante` CASCADE
;

DROP TABLE IF EXISTS `Restaurante_Pedido` CASCADE
;

/* Create Tables */

CREATE TABLE `Categoria`
(
	`Id` DECIMAL(2,0) NOT NULL,
	`Nombre` VARCHAR(50) NOT NULL,
	CONSTRAINT `PK_Categoria` PRIMARY KEY (`Id` ASC)
)

;

CREATE TABLE `Ingrediente`
(
	`Id` DECIMAL(4,0) NOT NULL,
	`Nombre` VARCHAR(30) NOT NULL,
	`Descripcion` VARCHAR(80) NULL,
	`Precio` DECIMAL(10,2) NOT NULL,
	`Imagen` VARCHAR(500) NULL,
	CONSTRAINT `PK_Ingrediente` PRIMARY KEY (`Id` ASC)
)

;

CREATE TABLE `Menu`
(
	`Id` DECIMAL(5,0) NOT NULL,
	`Nombre` VARCHAR(50) NOT NULL,
	`Id_Restaurante` DECIMAL(5,0) NULL,
	CONSTRAINT `PK_Menu` PRIMARY KEY (`Id` ASC)
)

;

CREATE TABLE `Menu_Producto`
(
	`Id_Menu` DECIMAL(5,0) NOT NULL,
	`Id_Producto` DECIMAL(5,0) NOT NULL,
	CONSTRAINT `PK_Menu_Producto` PRIMARY KEY (`Id_Menu` ASC, `Id_Producto` ASC)
)

;

CREATE TABLE `Pedido`
(
	`Id` DECIMAL(10,0) NOT NULL,
	`Comentarios` VARCHAR(200) NULL,
	`Costo_total` DECIMAL(10,2) NOT NULL,
	CONSTRAINT `PK_Pedido` PRIMARY KEY (`Id` ASC)
)

;

CREATE TABLE `Pedido_Menu`
(
	`Id_Pedido` DECIMAL(10,0) NOT NULL,
	`Id_Menu` DECIMAL(5,0) NOT NULL,
	CONSTRAINT `PK_Pedido_Menu` PRIMARY KEY (`Id_Pedido` ASC, `Id_Menu` ASC)
)

;

CREATE TABLE `Producto`
(
	`Id` DECIMAL(5,0) NOT NULL,
	`Nombre` VARCHAR(50) NOT NULL,
	`Id_categoria` DECIMAL(2,0) NOT NULL,
	`Imagen` VARCHAR(500) NULL,
	`Precio` DECIMAL(10,2) NOT NULL,
	CONSTRAINT `PK_Producto` PRIMARY KEY (`Id` ASC)
)

;

CREATE TABLE `Producto_Ingrediente`
(
	`Id_Producto` DECIMAL(5,0) NOT NULL,
	`Id_Ingrediente` DECIMAL(4,0) NOT NULL,
	CONSTRAINT `PK_Producto_Ingrediente` PRIMARY KEY (`Id_Producto` ASC, `Id_Ingrediente` ASC)
)

;

CREATE TABLE `Restaurante`
(
	`Id` DECIMAL(5,0) NOT NULL,
	`Nombre` VARCHAR(50) NOT NULL,
	`Imagen` VARCHAR(500) NULL,
	`Especialidad` VARCHAR(50) NOT NULL,
	CONSTRAINT `PK_Restaurante` PRIMARY KEY (`Id` ASC)
)

;

CREATE TABLE `Restaurante_Pedido`
(
	`Id_Restaurante` DECIMAL(5,0) NOT NULL,
	`Id_Pedido` DECIMAL(10,0) NOT NULL,
	CONSTRAINT `PK_Restaurante_Pedido` PRIMARY KEY (`Id_Restaurante` ASC, `Id_Pedido` ASC)
)

;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE `Ingrediente` 
 ADD CONSTRAINT `CK_Precio_Ingrediente` CHECK (Precio > 0)
;

ALTER TABLE `Menu` 
 ADD INDEX `IXFK_Menu_Restaurante` (`Id_Restaurante` ASC)
;

ALTER TABLE `Menu_Producto` 
 ADD INDEX `IXFK_Menu_Producto_Menu` (`Id_Menu` ASC)
;

ALTER TABLE `Menu_Producto` 
 ADD INDEX `IXFK_Menu_Producto_Producto` (`Id_Producto` ASC)
;

ALTER TABLE `Pedido` 
 ADD CONSTRAINT `CK_Costo_total` CHECK (Costo_total > 0)
;

ALTER TABLE `Pedido_Menu` 
 ADD INDEX `IXFK_Pedido_Menu_Menu` (`Id_Menu` ASC)
;

ALTER TABLE `Pedido_Menu` 
 ADD INDEX `IXFK_Pedido_Menu_Pedido` (`Id_Pedido` ASC)
;

ALTER TABLE `Producto` 
 ADD CONSTRAINT `CK_Precio_Producto` CHECK (Precio > 0)
;

ALTER TABLE `Producto` 
 ADD INDEX `IXFK_Producto_Categoria` (`Id_categoria` ASC)
;

ALTER TABLE `Producto_Ingrediente` 
 ADD INDEX `IXFK_Producto_Ingrediente_Ingrediente` (`Id_Ingrediente` ASC)
;

ALTER TABLE `Producto_Ingrediente` 
 ADD INDEX `IXFK_Producto_Ingrediente_Producto` (`Id_Producto` ASC)
;

ALTER TABLE `Restaurante_Pedido` 
 ADD INDEX `IXFK_Restaurante_Pedido_Pedido` (`Id_Pedido` ASC)
;

ALTER TABLE `Restaurante_Pedido` 
 ADD INDEX `IXFK_Restaurante_Pedido_Restaurante` (`Id_Restaurante` ASC)
;

/* Create Foreign Key Constraints */

ALTER TABLE `Menu` 
 ADD CONSTRAINT `FK_Menu_Restaurante`
	FOREIGN KEY (`Id_Restaurante`) REFERENCES `Restaurante` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Menu_Producto` 
 ADD CONSTRAINT `FK_Menu_Producto_Menu`
	FOREIGN KEY (`Id_Menu`) REFERENCES `Menu` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Menu_Producto` 
 ADD CONSTRAINT `FK_Menu_Producto_Producto`
	FOREIGN KEY (`Id_Producto`) REFERENCES `Producto` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Pedido_Menu` 
 ADD CONSTRAINT `FK_Pedido_Menu_Menu`
	FOREIGN KEY (`Id_Menu`) REFERENCES `Menu` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Pedido_Menu` 
 ADD CONSTRAINT `FK_Pedido_Menu_Pedido`
	FOREIGN KEY (`Id_Pedido`) REFERENCES `Pedido` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Producto` 
 ADD CONSTRAINT `FK_Producto_Categoria`
	FOREIGN KEY (`Id_categoria`) REFERENCES `Categoria` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Producto_Ingrediente` 
 ADD CONSTRAINT `FK_Producto_Ingrediente_Ingrediente`
	FOREIGN KEY (`Id_Ingrediente`) REFERENCES `Ingrediente` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Producto_Ingrediente` 
 ADD CONSTRAINT `FK_Producto_Ingrediente_Producto`
	FOREIGN KEY (`Id_Producto`) REFERENCES `Producto` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Restaurante_Pedido` 
 ADD CONSTRAINT `FK_Restaurante_Pedido_Pedido`
	FOREIGN KEY (`Id_Pedido`) REFERENCES `Pedido` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

ALTER TABLE `Restaurante_Pedido` 
 ADD CONSTRAINT `FK_Restaurante_Pedido_Restaurante`
	FOREIGN KEY (`Id_Restaurante`) REFERENCES `Restaurante` (`Id`) ON DELETE Restrict ON UPDATE Restrict
;

SET FOREIGN_KEY_CHECKS = 1
;