-- Password -> 12345

INSERT INTO roles (id, name) VALUES (1, 'USER');
INSERT INTO roles (id, name) VALUES (2, 'ADMIN');

INSERT INTO users (id, email, dni, name, lastname, profile_image, password, birthday_date, register_date, email_confirmed, dni_confirmed, role_id) VALUES (1, 'pepe@email.com', 45236233, 'pepe', 'cuenca', 'image-url', '$2a$10$iC.zKTMpPw6g8cswvjT8RuEXMcLJVQooea.xdMXQHtI0b2N063F1e', NOW(), NOW(), TRUE, TRUE, 1);
INSERT INTO users (id, email, dni, name, lastname, profile_image, password, birthday_date, register_date, email_confirmed, dni_confirmed, role_id) VALUES (2, 'admin@email.com', 9543623, 'admin', 'test', 'image-url', '$2a$10$j536Iqv0XeDFQaxBO4sqUeZwd5HSTouW9cYaUcWXnVE.YlfEGAr7C', NOW(), NOW(), TRUE, TRUE, 2);