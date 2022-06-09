# Simple CRUDS API
With NodeJS, Express and MySQL

# How to run?
just enter command : node server.js

# What you can do?
+ POST data with url http://localhost:8080/api/tutorials/
+ GET All data with url http://localhost:8080/api/tutorials/
+ GET data by id with url http://localhost:8080/api/tutorials/[id]
+ GET data published with url http://localhost:8080/api/tutorials/published
+ PUT as update data by id with url http://localhost:8080/api/tutorials/[id]
+ DELETE data by id with url http://localhost:8080/api/tutorials/[id]
+ DELETE all data with url http://localhost:8080/api/tutorials/

# Create database and table
+ CREATE DATABASE testdb;
+ CREATE TABLE IF NOT EXISTS `tutorials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `published` enum('true','false') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
