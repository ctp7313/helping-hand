DROP DATABASE IF EXISTS services_db;
CREATE DATABASE services_db;

USE services_db;

CREATE TABLE organization (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    address VARCHAR(60 NOT NULL,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(3) NOT NULL,
    zipcode INT(5) NOT NULL,
    phone_number INTEGER(11) NULL,
    website VARCHAR(30) NULL,
    sunday BOOLEAN DEFAULT false,
    monday BOOLEAN DEFAULT false,
    tuesday BOOLEAN DEFAULT false,
    wednesday BOOLEAN DEFAULT false,
    thursday BOOLEAN DEFAULT false,
    friday BOOLEAN DEFAULT false,
    saturday BOOLEAN DEFAULT false,
    hour_open INT(5) NULL,
    hour_closed INT(5) NULL,
    age_min INT(2) NULL,
    age_max INT(2) NULL,
    male BOOLEAN DEFAULT false,
    female BOOLEAN DEAFULT false,
    family_youth BOOLEAN DEFAULT false,
    food_bank BOOLEAN DEFAULT false,
    breakfast_meals BOOLEAN DEFAULT false,
    lunch_meals BOOLEAN DEFAULT false,
    dinner_meals BOOLEAN DEFAULT false,
    immediate_shelter BOOLEAN DEFAULT false,
    long_term_shelter BOOLEAN DEFAULT false,
    daily_care BOOLEAN DEFAULT false,
    urgent_care BOOLEAN DEFAULT false,
    dental BOOLEAN DEFAULT false,
    mental BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
