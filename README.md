## API Documentation in postman

https://documenter.getpostman.com/view/34343700/2sAY51AMKk

## API Live Base url

https://task-backend-snowy.vercel.app/api/v1

## API Endpoints

### User Routes

- **User Registration**

  - **Method**: `POST`
  - **Endpoint**: `/users/register`
  - **Description**: Register a new user.

- **User Login**
  - **Method**: `POST`
  - **Endpoint**: `/auth/login`
  - **Description**: Login for existing users to obtain an authentication token.

### Product Routes

- **Create Product**

  - **Method**: `POST`
  - **Endpoint**: `/product/create`
  - **Description**: Adds a new product to the inventory.

- **Get All Products**

  - **Method**: `GET`
  - **Endpoint**: `/product`
  - **Description**: Retrieves all products.

- **Get Single Product**

  - **Method**: `GET`
  - **Endpoint**: `/product/:id`
  - **Description**: Retrieves details of a specific product by its ID.

- **Update Product by ID**

  - **Method**: `PUT`
  - **Endpoint**: `/product/:id`
  - **Description**: Updates a product's information by its ID.

- **Delete Product by ID**
  - **Method**: `DELETE`
  - **Endpoint**: `/product/:id`
  - **Description**: Deletes a product by its ID.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ruhulamin-et15/task-backend-using-node-prisma-postgresql
   cd task
   ```
