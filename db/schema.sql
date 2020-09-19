DROP DATABASE IF EXISTS services_db;
CREATE DATABASE services_db;

USE services_db;

CREATE TABLE organization (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL,
    phonenumber INTEGER(15) NULL,
    food BOOLEAN DEFAULT false,
    health BOOLEAN DEFAULT false,
    daily_care BOOLEAN DEFAULT false,
    shelter BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
