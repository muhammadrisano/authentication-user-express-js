# Simple Authentication User Express JS
![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>


## Table of Contents

- [Prerequiste](#prerequiste)
- [Instalation](#installation)
- [Link Collection Postman](#link-collection-postman)
- [Structur Folder](#structur-folder)
- [Contributors](#contributors)


## Prerequiste
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- MySQL - Download and Install [MySQL](https://www.mysql.com/downloads/) - Make sure it's running on the default port.  

## Installation
### Clone
```
$ git clone https://github.com/muhammadrisano/authentication-user-express-js.git
$ cd authentication-user-express-js
$ npm install
```

### Create Environment Variable
```
$ touch .env
$ nano .env
```

```
DB_HOST="Your_Host"
DB_USER="Your_Username"
DB_PASSWORD="Your_Password"
DB_NAME="Your_Table"

SERVER_PORT=4000

SECRET_KEY = "secret key you"
REQUEST_HEADERS = "request header you"
AUTH_ADMIN = "xxxx"

```
### Start Development Server
```
$ npm start
```
## Link Collection Postman
```
https://www.getpostman.com/collections/55bfdc80714942d36aa1
```

## Structur Folder
```
\---src
|    \---Config
|    |   +---db.js            
|    \---Controllers
|    |   +---user.js
|    |   +---role.js
|    \---helpers
|    |   +---auth.js
|    |   +---helpers
|    \---models
|    |   +---user.js
|    |   +---role.js
|    \---routers
|    |   +---user.js
|    |   +---role.js
+---app.js
+---.env
```



### License
----

[Website](http://muhammadrisano.online) © [Muhammmad Risano Akbar](https://github.com/muhammadrisano/)
