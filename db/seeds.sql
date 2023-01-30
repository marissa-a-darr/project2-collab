/* User Data */ 
INSERT INTO User (first_name, last_name, email, password)
VALUES ("Jack", "White", "jackwhite123@gmail.com", "banana289"),
("Martha", "Steward", "cookingiscool@hotmail.com", "strawberries434"),
("Steven", "Speilberg","dinosaursgorawr@gmail.com", "bigteethTRex");

/* Bill Type Data */
INSERT INTO BillType (bill_type)
VALUES ("Grocery"),
("Housing"),
("Entertainment"),
("Utilities");

/* Payment Data */
INSERT INTO Payments (payment_name, payment_date, amount, bill_id, user_id)
VALUES ("Verizon", "2022-01-23", 137.25, 1, 1),
("Rent", "2022-01-25", 2500, 2, 1),
("AT&T", "2022-01-04", 102.34, 3, 2),
("Car Payment", "2022-02-03", 328.31, 4, 2),
("UberEats One", "2022-01-23", 15, 1, 3); 