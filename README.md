# Project intro

The project was created using **mongoDB Atlas** in order to store the database. The `.env` file should looks like:  
`DATABASE_URL=+mongodb...`

# How to run this application

### - Navigate to the backend folder `.\api`
### - Use the package manager of your choice (npm or yearn) to install and run the server, as below:
```bash
npm install && npm start
```
### Navigate to the frontend folder `.\client` and again, install and run it:
```bash
npm install && npm start
```
</br>
</br>

# Next steps

If I had more time to work on the project, I would implement the following features:

## Frontend

### - Implement tests (unit and integration)
### - Add a form to insert data to the database
### - Spend more time styling it

## Backend

### - Split data into different endpoints (e.g. `/products` and `/rank`), so we could easely select if we want to see all annouces or the filtered rank
### - Cover 100% of the application with unit tests
### - Add further methods (post, patch, delete) and users permission
### - Use SQL instead NoSQL to deal with DB
