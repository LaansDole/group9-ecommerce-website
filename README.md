# Group 9 E-commerce Website

## Link to the website: https://group9ecommerceweb-dolelongan.b4a.run/
## Link to the GitHub repository: https://github.com/LaansDole/Group9_E-commerce_Website/

#### Project start date: 24/04/2023
#### Project end date: 20/05/2023

#### If you encounter this error: EADDRINUSE, Address already in use, do as below:
```bash
# Display the processes or applications that are currently using the network port 3000
$ sudo lsof -i :3000
# Check for the PID on the screeen
$ kill -9 <PID>
```

## Contribution

| Student Name      | Student ID | Contribution Score |
| :---------------- | :--------- | :----------------: |
| Do Le Long An     | S-3963207  |         20         |
| Truong Hong Van   | S-3957034  |         20         |
| Pham Le Quynh Anh | S-3927427  |         20         |
| Bui Tuan Anh      | S-3970375  |         20         |
| Lao Vinh Khang    | S-3891925  |         20         |

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
├── .env
├── Dockerfile
├── index.js
├── package-lock.json
├── package.json
├── README.md
```

1. `errors/`
The errors directory contains the exception handlers for the website

2. `middleware/`
The handlers to check user authentication are located in this directory

3. `public/css/`
The css directory consists of .css style files for the website, including global styles

4. `public/img/`
This directory stores images needed to build the website UI

5. `public/js/`
The js directory stores the website behaviours

6. `public/uploads/`
The uploaded images by users are stored in this directory, website local storage

7. `server/controllers/`
Each controller is responsible for the GET and POST method of the pages, which is then imported in `server/routes`. In addition, it defines the objects to go in the rendered `.ejs` file.

8. `server/model`
The directory contains the schema model for the `Product`, `Cart`, `Order`, etc. for the BE to work with website database.

9. `server/routes` 
This stores the routes of the layouts. It works with the `controllers` and `middleware` to define the page route and control user access to each pages.

10. `utils/`
This directory's purpose is to create tokens, connect with and validate MongoDB ID

11. `views/`
The views directory contains all the pages on the website

12. `views/layouts/`
The layout acts as a container for other pages content

13. `views/partials/`
The partials directory stores the breakdown components for layouts and other .ejs files

14. `views/pages/`
The directory contains .ejs files related to that website pages, such as homepage, dashboard, etc.

15. `.env`
This file contains ENVIRONMENT VARIABLES such as ACCESS KEY, which is meant to be hidden and ignored by `.gitignore`

16. `Dockerfile`
The Dockerfile defines the environment and dependencies required by an application, along with instructions for how to build and configure the container image.

17. `index.js`
Entry point or main file of the application, it is responsible for setting up and configuring the application. It is the file that is executed first when the application starts.

18. `package.json` & `package-lock.json`
Manage dependencies and package versions.

19. `README.md`
A text file containing useful reference information about this project.

20. `LICENSE`
MIT LICENSE



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
- Frontend: EJS, Bootstrap CSS, CSS, JavaScript
- Backend: NodeJS, ExpressJS
- Database: MongoDB
- Hosting: [Back4App](https://containers.back4app.com/)

### Supporting tools used

- UI Prototype: Canva, Codepen, Dribble, Figma
- Other resources: MDN Web Docs, RMIT Canvas, NPM Package, ChatGPT, Packages' Docs
- Packages: Refer to package.json and package-lock.json

## Build

To clone and run this project, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://npmjs.com)) installed on your computer. 

- Prequisite: VSCode or Other IDE / Editor

- From your CLI, Terminal or SHELL:

```bash
# Clone this repository
$ git clone https://github.com/LaansDole/Group9_E-commerce_Website.git

# Go into the repository
$ cd Group9_E-commerce_Website

# Install dependencies
$ npm install

# Start with npm
$ npm start

# OR Start with node
$ node index.js

```

## License

This software is licensed under the MIT License ©

