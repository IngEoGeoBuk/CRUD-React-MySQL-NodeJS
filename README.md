# CRUD-React-MySQL-NodeJS

This is Basic CRUD Project Using React, MySQL, NodeJS
https://www.youtube.com/watch?v=re3OIOr9dJI&t=1s&ab_channel=PedroTech

1. Setting .env
   client

- REACT_APP_API_URL=http://localhost:3001/api
  server:
- DB_DATABASE: your database
- DB_PASSWORD: your password

2. If there's nothing data on the MySQL, Setting your MySQL.
   (Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client)

2-1) Launch MySQL Installer

2-2) Go to MySQL Server Reconfigure(Click Blue One.)

2-3) In the 'Authentication Method' stage, check "Use Legacy Authentication Method (Retain MySQL 5.x Compatibility)". Second One!
(No First one "Use Strong Password Encryption for Authenti~~~ (RECOMMENDED)")
