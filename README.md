# ndexp-mysql-restapi

A Node.js Restful CRUD API using Express and MySQL database
-----------------------------------------------------------

This site is using Node.js with Express Web Server and MySQL Database (Database: learners; Table: customers)

With this Rest Api, you can add, retrieve, update & delete Customers

## Implementation:

1. Configuration for MySQL database
2. Model
3. Controller
4. Routes

## To test the site locally:

1. Use the configuration file (app\config\db.config.js) to provide details of your database with a table called customers. The customers table has 3 fields (email, name and active (true or false))

2. Start MySQL Server

3. From the root of project run the commands:

  - `node server.js`
  - With the two servers running, use Postman to test the API

<hr>

## References

1. [bezkoder](https://bezkoder.com/node-js-rest-api-express-mysql/)
