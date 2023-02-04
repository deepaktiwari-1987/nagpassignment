# Project Title

Retail management system

---
## Requirements

For development, you will only need Node.js and a npm global package, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.19.0

    $ npm --version
    6.14.16

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Mogodb installation
  After installing node, this project will need mongodb too, so just follow https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/ link for mongodb installation guide as per your machine

---

## Install

    $ git clone https://github.com/deepaktiwari-1987/retail-management-system-backend.git
    $ cd PROJECT_TITLE
    $ npm install

## Sample Database dump file 

You can see the dumped database folder for mogodb in root folder of this project with name "retail-management-database"

## Configure app

You just need to restore database into mongo db database to start working on this. please follow below steps to setup mongo db database. Here we are assuming mongo is already installed in you machine.

- Go to terminal and type command "mongo"
- Create database using comming "use retail-management". For this application database name is "retail-management". if you want to create different database then you can create any and can go in config.js file and replace the database name with the name of database which you have created
- exit from mongo termial
- import database in mongodb. mongorestore -d <CREATED_DATABASE_NAME> <PATH_OF_DATABASE_DUMP_FOLDER>

## Sample Login Credentails

deepak@gmail.com/1234

## Running the project

    $ npm start

## Simple build for production

    $ npm run build