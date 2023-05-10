# Document for how to organize files and folders

### ```Disclaimer: This is for internal devs to understand more about the project and create their own TODO tasks```

## About views/:
### - For views/layouts/
Think of the layout as the containers for those pages, which is in views

### - For views/partial/
The partials act as the component for the layout files

### - For views/ files
These files act as the pages on the website

## About server/:
### - For the server/route folder:
It will contains all the routes from a section layout like main or login. It will work with `server/controller` to define the route of each page when clicked on

### - For the server/controller folder:
<strong> ${section}Controller as the name </strong>:
It will export and render the pages in here, 
choosing what pages will be in the <%- body %> of the main section. Which is then imported in `server/route`.

### - For the server/model folder:
It will act as the database for `server/controller (req)`. Once created, import to controller to use its `data`.

## Website Layout
### - In layout/: login.ejs
In login.ejs <%- body %>:
    - login-form
    - signup-user-form
    - signup-shipper-form
    - signup-vendor-form

### - In layout/: main.ejs
In main.ejs <$- body %>:
- index (homepage) 
- ...


