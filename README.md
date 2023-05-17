# Group9 E-commerce Website

#### Link to the website: https://group9ecommerceweb-dolelongan.b4a.run/
#### Link to the GitHub repository: https://github.com/LaansDole/Group9_E-commerce_Website/

#### Project start date: 24/04/2023
#### Project end date: 20/05/2023
#### Disclaimer: If you encounter this error: EADDRINUSE, Address already in use, do as below:
```bash
$ sudo lsof -i :3000
# Check for the PID on the screeen
$ kill -9 <PID>
```

## Contribution

| Student Name      | Student ID | Contribution Score |
| :---------------- | :--------- | :----------------: |
| Do Le Long An     | S-3963207  |                    |
| Truong Hong Van   | S-3957034  |                    |
| Pham Le Quynh Anh | S-3927427  |                    |
| Bui Tuan Anh      | S-3970375  |                    |
| Lao Vinh Khang    | S-3891925  |                    |

## Project Structure

```
Group9_E-commerce_Website/
├── src/
|   ├── errors/
|   ├── middlewares/
|   ├── public/
│   |   ├── css/
|   |   ├── img/
|   |   ├── js/
|   |   |   ├── api/
|   |   ├── uploads/
|   ├── server/
│   |   ├── controllers/
|   |   ├── model/
|   |   ├── routes/
|   |   ├── uploads/
|   ├── utils/
|   ├── views/
│   |   ├── layouts/
|   |   ├── partials/

# errors/
The errors folder contains the exception handlers for the website

# middleware/
The handlers to check user authentication are located in this folder

# public/css/
The css folder consists of style files for the website pages

# public/img/
This folder stores figures needed to build the website

# public/js/
The js folder stores the website behaviours

# public/uploads/
The figures uploaded by users are stored in this folder

# server/controllers/
Each controller exports and renders the pages. It chooses what pages will be in the <%- body %> of the main section, and it is then imported in `server/routes`

# server/model
The folder acts as the database for `server/controllers`. 

# server/routes 
This stores the routes of the layouts. It works with the `controllers` to define the page route

# utils/
This folder's purpose is to create tokens, connect with and validate MongoDB ID

# views/
The views folder contains all the pages on the website

# views/layouts/
The layout acts as a container for other pages content

# views/partials/
The partials folder stores the components of the layout 





## About:
This is an assignment project for COSC2430 Web Programming offered at RMIT University Vietnam during Semester 2023A.

- Campus: Saigon South (SGS), Vietnam

- Lecturer: Mr. Tom Huynh

### Background: 
Founded in 2012, Lazada Group is Southeast Asia's leading eCommerce platform. With a presence in six countries – Indonesia, Malaysia, the Philippines, Singapore, Thailand, and Vietnam – we connect this vast and diverse region through our technology, logistics and payments capabilities. Today, we have the largest selection of brands and sellers, and by 2030, we aim to serve 300 million customers. In 2016, Lazada became the regional flagship of the Alibaba Group, and is backed by Alibaba's best-in-class technology infrastructure.

#### ECommerce System

In this project, with Lazada's permission, you are working on a simplified and slightly modified version of the above system.

### Technologies used:

**MEN Stack**
- Frontend: HTML, Bootstrap CSS, JavaScript
- Backend: NodeJS, ExpressJS, EJS
- Database: MongoDB
- Hosting: Heroku

### Supporting tools used

- UI Prototype: Canva, Codepen, Dribble, Figma
- Other resources: MDN Web Docs, RMIT Canvas, NPM Package
- Packages: Refer to package.json and package-lock.json

## Build

To clone and run this project, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/

# Go into the repository
$ cd Group9_E-commerce_Website

# Install dependencies
$ npm install

# Start
$ npm start
```

## License

This software is licensed under the MIT License ©

