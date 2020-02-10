# ndexp-sequelize-mysql-restapi

A Node.js Restful CRUD API using Express, Sequelize and MySQL database
----------------------------------------------------------------------

This site is using Node.js with Express Web Server, Sequelize and MySQL Database (Database: learners; Table: customers)

With this Rest Api, you can add, retrieve, update & delete Customers

## Implementation:

1. Configuration for MySQL database and Sequelize
2. Sequelize Model (article.model.js + index.js)
3. Controller
4. Routes

## To test the site locally:

1. Use the configuration file (app\config\db.config.js) to provide details of your database with a table called articles. The articles table has 3 required fields (title, description and published (true or false))

2. Start MySQL Server

3. From the root of project run the commands:

  - `node server.js`
  - With the two servers running, use Postman to test the API

<hr>

## References

1. [bezkoder](https://bezkoder.com/node-js-express-sequelize-mysql/)
