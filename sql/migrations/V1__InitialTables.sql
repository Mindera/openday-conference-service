CREATE TABLE user
(
  id              INT PRIMARY KEY AUTO_INCREMENT,
  first_name      VARCHAR(255),
  last_name       VARCHAR(255),
  email           VARCHAR(255),
  password        VARCHAR(255),
  telegram_handle VARCHAR(50),
  twitter_handle  VARCHAR(50)
);