DROP DATABASE IF EXISTS payme_db;
CREATE DATABASE payme_db;

USE payme_db;

-- Users table
CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
-- BillType table
CREATE TABLE BillType (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bill_type VARCHAR(40) NOT NULL

);
-- Payments table
CREATE TABLE Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    payment_name VARCHAR(40) NOT NULL,
    payment_date DATE NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    bill_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (bill_id) REFERENCES BillType(id),
    FOREIGN KEY (user_id) REFERENCES User(id)
); 