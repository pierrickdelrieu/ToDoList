DROP DATABASE IF EXISTS todolistdb;
CREATE DATABASE todolistdb;
USE todolistdb;


CREATE TABLE IF NOT EXISTS `ToDoLists` (`id_todolist` INTEGER auto_increment , `name` VARCHAR(50), `is_favorite` TINYINT(1), PRIMARY KEY (`id_todolist`));
CREATE TABLE IF NOT EXISTS `Haves` (`id_have` INTEGER auto_increment , `id_todolist` INTEGER, `id_user` INTEGER, PRIMARY KEY (`id_have`), FOREIGN KEY (`id_todolist`) REFERENCES `ToDoLists` (`id_todolist`) ON DELETE SET NULL ON UPDATE CASCADE);
CREATE TABLE IF NOT EXISTS `Rubrics` (`id_rubric` INTEGER auto_increment , `name` VARCHAR(50), `id_todolist` INTEGER, PRIMARY KEY (`id_rubric`), FOREIGN KEY (`id_todolist`) REFERENCES `ToDoLists` (`id_todolist`) ON DELETE SET NULL ON UPDATE CASCADE);
CREATE TABLE IF NOT EXISTS `Tasks` (`id_task` INTEGER auto_increment , `name` VARCHAR(50), `description` VARCHAR(500), `dateTask` DATETIME, `priority` INTEGER, `id_rubric` INTEGER, PRIMARY KEY (`id_task`));
CREATE TABLE IF NOT EXISTS `Users` (`id_user` INTEGER auto_increment , `firstname` VARCHAR(50), `lastname` VARCHAR(50), `email` VARCHAR(50) UNIQUE, `password` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id_user`));

INSERT INTO todolists(name,is_favorite) VALUES ("Education",false);
INSERT INTO todolists(name,is_favorite) VALUES ("Travel",true);
INSERT INTO todolists(name,is_favorite) VALUES ("Sport",true);
INSERT INTO todolists(name,is_favorite) VALUES ("Reading",false);
INSERT INTO todolists(name,is_favorite) VALUES ("Watch films",true);
INSERT INTO todolists(name,is_favorite) VALUES ("Manger",true);

INSERT INTO haves(id_todolist,id_user) VALUES (1,1);
INSERT INTO haves(id_todolist,id_user) VALUES (6,1);
INSERT INTO haves(id_todolist,id_user) VALUES (2,1);
INSERT INTO haves(id_todolist,id_user) VALUES (3,1);
INSERT INTO haves(id_todolist,id_user) VALUES (4,2);
INSERT INTO haves(id_todolist,id_user) VALUES (5,2);

INSERT INTO tasks(name,description,id_rubric,dateTask,priority) VALUES ("Finalize my programming project", "I need to finalize my todolist project",2,"2022-03-29",2);
INSERT INTO tasks(name,description,id_rubric,dateTask,priority) VALUES ("Keep developing WeTri", "In order to keep developing the applicaiton, we need to find another name.",1,"2022-03-28",2);
INSERT INTO tasks(name,description,id_rubric,dateTask,priority) VALUES ("blablabla", "blablabla description",1,"2022-03-28",2);
INSERT INTO tasks(name,description,id_rubric,dateTask,priority) VALUES ("test1", "test description",3,"2022-03-28",2);
INSERT INTO tasks(name,description,id_rubric,dateTask,priority) VALUES ("test2", "test2 description",4,"2022-03-29",2);
INSERT INTO tasks(name,description,id_rubric,dateTask,priority) VALUES ("test3", "test3 description",5,"2022-05-20",2);


INSERT INTO rubrics(name,id_todolist) VALUES ("ToDo",1);
INSERT INTO rubrics(name,id_todolist) VALUES ("Doing",1);
INSERT INTO rubrics(name,id_todolist) VALUES ("ToDo",4);
INSERT INTO rubrics(name,id_todolist) VALUES ("Doing",4);
INSERT INTO rubrics(name,id_todolist) VALUES ("Done",4);



