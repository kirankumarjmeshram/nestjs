# **Photo Album API**

This project is a REST API built with NestJS that allows users to retrieve a list of users, albums, and photos. The data is sourced from a mock JSON file that simulates a database, and authentication is not required for any of the endpoints.

## **Project Features**

* Fetch all users
* Fetch all albums (or a specific album by ID)
* Fetch all photos (or a specific photo by ID)
* Swagger UI for API documentation and testing
* Unit and end-to-end tests included

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed on your machine:

* [Node.js]() (v16 or higher)
* [npm](https://www.npmjs.com/) (v8 or higher)

### **Installation**

1. Clone the repository:

   ```
   git clone https://github.com/your-username/photo-album-app.git
   cd photo-album-app

   ```
2. Install the dependencies:

   ```
   npm install

   ```

### **Running the Application**

Start the development server with:

```
npm run start

```

`</code></div>``</div></pre>`

The API will be running on `http://localhost:3000`.

### **Swagger API Documentation**

Swagger UI is integrated into the project for testing and documentation. Once the server is running, you can access it at:

```
http://localhost:3000/api-docs

```

## **API Endpoints**

### **Base URL** : `http://localhost:3000`

### **Users Endpoints**

* **GET /users**
  Retrieves a list of all users.
  **Example Request** :

```
GET /users

```

  **Example Response** :

```
[
  { "id": 1, "name": "Leanne Graham", "email": "leanne@example.com" },
  { "id": 2, "name": "Ervin Howell", "email": "ervin@example.com" }
]

```

### **Albums Endpoints**

* **GET /albums**
  Retrieves a list of all albums.
  **Example Request** :

```
GET /albums

```

  **Example Response** :

```
[
  { "id": 1, "userId": 1, "title": "Leanne's Album" },
  { "id": 2, "userId": 2, "title": "Ervin's Album" }
]

```

* **GET /albums/**

  Retrieves a specific album by its ID.

  **Example Request** :

  ```
  GET /albums/1

  ```

  **Example Response** :

  ```
  { "id": 1, "userId": 1, "title": "Leanne's Album" }

  ```

### **Photos Endpoints**

* **GET /photos**
  Retrieves a list of all photos.
  **Example Request** :

  ```
  GET /photos
  ```

  **Example Response** :

  ```
  [
    { "id": 1, "albumId": 1, "title": "Leanne's Photo 1", "url": "https://via.placeholder.com/600/92c952" },
    { "id": 2, "albumId": 2, "title": "Ervin's Photo 1", "url": "https://via.placeholder.com/600/771796" }
  ]

  ```

  ```

  ```
* **GET /photos/**

  Retrieves a specific photo by its ID.

  **Example Request** :

  ```
  GET /photos/1
  ```

  **Example Response** :

  ```
  { "id": 1, "albumId": 1, "title": "Leanne's Photo 1", "url": "https://via.placeholder.com/600/92c952" }

  ```

  ```

  ```

---

## **Testing**

The project includes both unit and end-to-end tests.

### **Run Unit Tests**

```
npm run test

```

### **Run End-to-End Tests**

```
npm run test:e2e

```

---

## **Project Structure**

├── src/
│   ├── albums/
│   │   ├── albums.controller.ts
│   │   ├── albums.module.ts
│   │   ├── albums.service.ts
│   ├── photos/
│   │   ├── photos.controller.ts
│   │   ├── photos.module.ts
│   │   ├── photos.service.ts
│   ├── users/
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   ├── users.service.ts
│   ├── app.module.ts
│   ├── main.ts
│   └── database.json
├── test/
│   └── app.e2e-spec.ts
├── package.json
├── tsconfig.json
└── README.md


## **Contributors**

* [Kirankumar J Meshram ](https://github.com/kirankumarjmeshram)
