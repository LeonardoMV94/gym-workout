-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema WorkOut
-- -----------------------------------------------------
-- 
-- 

-- -----------------------------------------------------
-- Schema WorkOut
--
-- 
-- 
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `WorkOut` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci ;
-- -----------------------------------------------------
-- Schema workout
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
USE `WorkOut` ;

-- -----------------------------------------------------
-- Table `WorkOut`.`salas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`salas` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`salas` (
  `N_sala` INT NOT NULL AUTO_INCREMENT,
  `cupo_min` INT NULL,
  `cupo_max` INT NULL,
  PRIMARY KEY (`N_sala`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`regiones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`regiones` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`regiones` (
  `id_region` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `ordinal` VARCHAR(45) NULL,
  PRIMARY KEY (`id_region`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`provincias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`provincias` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`provincias` (
  `id_provincia` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `region_id` INT NULL,
  PRIMARY KEY (`id_provincia`),
  CONSTRAINT `region_id`
    FOREIGN KEY (`region_id`)
    REFERENCES `WorkOut`.`regiones` (`id_region`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`comunas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`comunas` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`comunas` (
  `id_comuna` INT NOT NULL AUTO_INCREMENT,
  `comuna` VARCHAR(45) NULL,
  `provincia_id` INT NULL,
  PRIMARY KEY (`id_comuna`),
  CONSTRAINT `provincia_id`
    FOREIGN KEY (`provincia_id`)
    REFERENCES `WorkOut`.`provincias` (`id_provincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`direcciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`direcciones` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`direcciones` (
  `id_direccion` INT NOT NULL AUTO_INCREMENT,
  `comuna_id` INT NULL,
  `calle` VARCHAR(45) NULL,
  `numero` VARCHAR(45) NULL,
  PRIMARY KEY (`id_direccion`),
  CONSTRAINT `ciudad_id`
    FOREIGN KEY (`comuna_id`)
    REFERENCES `WorkOut`.`comunas` (`id_comuna`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`usuarios` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `direccion_id` INT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellidoP` VARCHAR(45) NULL,
  `apellidoM` VARCHAR(45) NULL,
  `celular` VARCHAR(11) NULL,
  `correo` VARCHAR(45) NULL,
  `edad` INT NULL,
  `password` VARCHAR(254) NULL,
  PRIMARY KEY (`id_usuario`),
  CONSTRAINT `N_dire`
    FOREIGN KEY (`direccion_id`)
    REFERENCES `WorkOut`.`direcciones` (`id_direccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`profesores`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`profesores` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`profesores` (
  `id_profe` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NULL,
  PRIMARY KEY (`id_profe`),
  CONSTRAINT `N_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `WorkOut`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`nombre_clases`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`nombre_clases` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`nombre_clases` (
  `id_NC` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id_NC`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`clases`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`clases` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`clases` (
  `id_clases` INT NOT NULL AUTO_INCREMENT,
  `sala_id` INT NULL,
  `profe_id` INT NULL,
  `nombre_clase_id` INT NULL,
  `valor` FLOAT NULL,
  `descripcion` VARCHAR(350) NULL,
  `hora` TIME NULL,
  `fecha` DATE NULL,
  PRIMARY KEY (`id_clases`),
  CONSTRAINT `N_sala`
    FOREIGN KEY (`sala_id`)
    REFERENCES `WorkOut`.`salas` (`N_sala`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `N_profe`
    FOREIGN KEY (`profe_id`)
    REFERENCES `WorkOut`.`profesores` (`id_profe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `nc_id`
    FOREIGN KEY (`nombre_clase_id`)
    REFERENCES `WorkOut`.`nombre_clases` (`id_NC`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`alumnos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`alumnos` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`alumnos` (
  `id_alumno` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NULL,
  `peso` FLOAT NULL,
  `altura` FLOAT NULL,
  `IMC` FLOAT NULL,
  PRIMARY KEY (`id_alumno`),
  CONSTRAINT `id_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `WorkOut`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`inscripciones`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`inscripciones` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`inscripciones` (
  `id_inscripciones` INT NOT NULL AUTO_INCREMENT,
  `clases_id` INT NULL,
  `alumno_id` INT NULL,
  `hora` TIME NULL,
  `fecha` DATE NULL,
  PRIMARY KEY (`id_inscripciones`),
  CONSTRAINT `N_clases`
    FOREIGN KEY (`clases_id`)
    REFERENCES `WorkOut`.`clases` (`id_clases`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `N_alumno`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `WorkOut`.`alumnos` (`id_alumno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`asistencias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`asistencias` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`asistencias` (
  `id_asistencia` INT NOT NULL AUTO_INCREMENT,
  `clases_id` INT NULL,
  `alumno_id` INT NULL,
  `fecha` DATE NULL,
  `hora` TIME NULL,
  PRIMARY KEY (`id_asistencia`),
  CONSTRAINT `id_clases`
    FOREIGN KEY (`clases_id`)
    REFERENCES `WorkOut`.`clases` (`id_clases`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_alumno`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `WorkOut`.`alumnos` (`id_alumno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`pagos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`pagos` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`pagos` (
  `id_pago` INT NOT NULL AUTO_INCREMENT,
  `incs_id` INT NULL,
  `alumno_id` INT NULL,
  `fecha` DATE NULL,
  `monto` INT NULL,
  `tipo_pago` VARCHAR(15) NULL,
  PRIMARY KEY (`id_pago`),
  CONSTRAINT `incs_id`
    FOREIGN KEY (`incs_id`)
    REFERENCES `WorkOut`.`inscripciones` (`id_inscripciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `alumno_id`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `WorkOut`.`alumnos` (`id_alumno`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `WorkOut`.`sugerencias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `WorkOut`.`sugerencias` ;

CREATE TABLE IF NOT EXISTS `WorkOut`.`sugerencias` (
  `id_sugerencia` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NULL,
  `comt` VARCHAR(250) NULL,
  `fecha` DATE NULL,
  `hora` TIME NULL,
  PRIMARY KEY (`id_sugerencia`),
  CONSTRAINT `usuario_id`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `WorkOut`.`usuarios` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
