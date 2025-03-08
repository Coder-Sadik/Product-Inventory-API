# Product Inventory API

A CRUD-based RESTful API for managing a product inventory. Built with **Node.js**, **Express.js**, and **MongoDB**.

---

## Features

- **CRUD Operations**: Create, Read, Update, and Delete products.
- **MongoDB Database**: Stores product data in a MongoDB collection.
- **RESTful Endpoints**: Easy-to-use API endpoints for managing products.
- **Error Handling**: Proper error handling for invalid requests.
- **Scalable**: Ready for additional features like pagination, filtering, and authentication.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for handling HTTP requests.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Postman**: Tool for testing API endpoints.

---

## ** Do not forget to update your own MONGODB URI inside the '.env' file.

## API Endpoints

| HTTP Method | Endpoint               | Description                     |
|-------------|------------------------|---------------------------------|
| `POST`      | `/api/products`        | Add a new product              |
| `GET`       | `/api/products`        | Get all products               |
| `GET`       | `/api/products/:id`    | Get a specific product by ID   |
| `PUT`       | `/api/products/:id`    | Update a product by ID         |
| `DELETE`    | `/api/products/:id`    | Delete a product by ID         |
