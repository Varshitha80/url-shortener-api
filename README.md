# 🔗 Mini URL Shortener API

This project is a simple and efficient URL shortener REST API built using Node.js, Express, and MongoDB. It allows users to shorten long URLs and redirect using short codes.

## Features

- Validates input URLs
- Generates unique short codes using `nanoid`
- Supports optional expiry for short URLs
- Tracks the number of clicks
- Redirects short URLs to their original destination
- Clean and modular codebase

## Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- nanoid – for short code generation
- valid-url – for URL validation
- dotenv – for managing environment variables

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Varshitha80/url-shortener-api.git
cd url-shortener-api

2. Install Dependencies

npm install

3. Create a .env file
Create a .env file in the root directory with the following values:

PORT=5000
MONGO_URL=your_mongodb_connection_string
BASE_URL=http://localhost:5000
You can refer to the .env.example file for reference.

4. Start the Server
To start the server in development mode using  nodemon:

npm run dev
Or simply:

nodemon app.js
If you are not using nodemon:
node app.js

API Endpoints
POST /shorten
Used to create a short URL.

Request Body:

json

{
  "url": "https://www.google.com",
  "expiresIn": 60
}
url: The original URL to be shortened (required)

expiresIn: Time in seconds after which the short URL should expire (optional)

Response:

{
  "shorturl": "http://localhost:5000/abc123"
}

GET /:code
Used to redirect to the original URL.

Example:

GET http://localhost:5000/abc123
Redirects to the original long URL if the code is valid.

Returns 404 Not Found if the code doesn’t exist.

Returns 410 Gone if the URL has expired.

Postman Collection
You can use the included Postman collection to test the API endpoints.

Open Postman

Import the collection file (URL Shortener Collection.postman_collection.json) from the root of this project.

Use the POST /shorten and GET /:code endpoints to test.

Example MongoDB Document Structure

{
  "_id": "ObjectId",
  "originalurl": "https://www.google.com",
  "shortcode": "abc123",
  "createdat": "2024-07-07T09:00:00Z",
  "expiresat": "2024-07-07T09:01:00Z",
  "clicks": 2,
  "__v": 0
}
Folder Structure

url-shortener-api/
├── controllers/
│   └── urlController.js
├── models/
│   └── Url.js
├── routes/
│   └── urlRoutes.js
├── utils/
│   └── validateUrl.js
├── .env
├── .env.example
├── app.js
├── package.json
├── README.md

Future Improvements
Add frontend UI for shortening and managing URLs

Dockerize the app for easier deployment

Add rate limiting middleware

Add Swagger documentation for API

Author
Varshitha Vemula

License
This project is licensed under the MIT License.

Let me know when you're ready to publish it on GitHub or if you'd like me to write a one-line description for your repo too!







Ask ChatGPT
