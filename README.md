# Blogging App(Project Name)
 A blogging app where  user can create blogs , read blogs.
 
 # Setup
 To run this project
 npm install(use npm install to install node modules packages.)
 npm start
 (this will create two table in database by the name of users and blogs)
 
 # Requirements
 node
 vscode
 postman postgresSql
 
 # Directories in project
 *Controller
 controller contains three files auth.js, blog.js, user.js .The auth.js file use jwt authentication
 if user email and password match then they generate a token after that a user can create a new blog.
 *Db
 
 
 # db directory
 db folder contains database connection which contains the models folders in which
 two tables are created that is blog.js and user.js which contains the definition of table columns
 in it.
 
 # APIs
 
 The controller folder contains user and blog file which is used for APIS hit which uses 
 put,post,delete,get method in order to create, delete, update and view blog.
