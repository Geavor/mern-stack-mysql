-- table tasks
CREATE TABLE tasks(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300),
  done BOOLEAN NOT NULL DEFAULT 0,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO tasks(id,title,description) VALUES
  (1,'First task','First description'),
  (2,'Second task','Second description'),
  (3,'Third task','Third description');