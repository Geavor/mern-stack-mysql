# Task Tracer Project

Built with **MERN** stack
This project uses VoltaJS

- Mysql
- Express
- React (TailwindCSS, axios, Formik)
- Node


## How to run

1. Open terminal
2. Execute `npm i`
3. Execute `npm run dev`
4. Open another terminal
5. Enter to *client* directory
6. Execute `npm i`
7. Execute `npm run dev`

> Don't forget to create a **.env** file with the values of the variables that are in **.env.example**

> Add an **.env** file in **client directory** if you have an API url different from default (localhost:4000)

## Backend routes
- <localhost>/ping -  to check database connection
- <localhost>/api/tasks -  to get tasks
- <localhost>/api/tasks/:id -  to get 1 task
- <localhost>/api/tasks -  to create task
- <localhost>/api/tasks/:id -  to update task
- <localhost>/api/tasks/:id -  to delete task

## Frontend routes
- / -> Home
- /new -> to create a task