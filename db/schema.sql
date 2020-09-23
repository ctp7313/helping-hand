DROP DATABASE IF EXISTS services_db;
CREATE DATABASE services_db;

USE services_db;

CREATE TABLE organization (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    address VARCHAR(60 NOT NULL,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(3) NOT NULL,
    zip INT(5) NOT NULL,
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
    meals_served BOOLEAN DEFAULT false,
    meals_breakfast BOOLEAN DEFAULT false,
    meals_lunch BOOLEAN DEFAULT false,
    meals_dinner BOOLEAN DEFAULT false,
    shelter_immediate BOOLEAN DEFAULT false,
    shelter_long_term BOOLEAN DEFAULT false,
    daily_care BOOLEAN DEFAULT false,
    urgent_care BOOLEAN DEFAULT false,
    dental BOOLEAN DEFAULT false,
    behavioral BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
