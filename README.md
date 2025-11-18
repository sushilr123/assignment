# Topic Retrieval API

A Node.js/Express API endpoint to retrieve and search topics from a JSON file. This project simulates TOTLE's `/api/catalogue/` functionality.

## 🚀 GitHub Repository

**Repository Link:** [Add your GitHub repository link here after upload]

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Testing the API](#testing-the-api)
- [Error Handling](#error-handling)
- [Video Demonstration](#video-demonstration)

## ✨ Features

- ✅ RESTful API endpoint for topic retrieval
- ✅ Case-insensitive search functionality
- ✅ Sorting by name (ascending order)
- ✅ Comprehensive error handling (400, 500 status codes)
- ✅ Input validation for query parameters
- ✅ JSON response format with structured data
- ✅ 10+ sample topics in database

## 📁 Project Structure

```
topic-retrieval-api/
├── data/
│   └── topics.json          # Topics database (JSON file)
├── src/
│   └── server.js            # Main Express server and API logic
├── .env.example             # Example environment variables
├── .gitignore               # Git ignore file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** (v6.x or higher)
- **Git** (for version control)

## 🔧 Installation

Follow these steps to set up the project on your local machine:

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd assignment
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:

- `express` - Web framework for Node.js
- `dotenv` - Environment variable management
- `nodemon` - Development dependency for auto-restart

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env
```

Edit the `.env` file if you want to change the default port:

```env
PORT=3000
NODE_ENV=development
```

## ⚙️ Configuration

The application uses the following configuration:

- **Port**: Default `3000` (configurable via `.env` file)
- **Data Source**: `data/topics.json` file
- **Environment**: Development mode by default

## 🏃 Running the Application

### Production Mode

```bash
npm start
```

### Development Mode (with auto-restart)

```bash
npm run dev
```

The server will start at `http://localhost:3000`

You should see:

```
Server is running on http://localhost:3000
API endpoint: http://localhost:3000/api/topics
```

## 📖 API Documentation

### Base URL

```
http://localhost:3000
```

### Endpoints

#### 1. Get All Topics

**Endpoint:** `GET /api/topics`

**Description:** Retrieves all topics from the database.

**Response:**

```json
[
  {
    "id": 1,
    "name": "JavaScript Fundamentals",
    "category": "Programming"
  },
  {
    "id": 2,
    "name": "Node.js Backend Development",
    "category": "Programming"
  }
]
```

**Status Code:** `200 OK`

---

#### 2. Search Topics

**Endpoint:** `GET /api/topics?search=<query>`

**Description:** Searches topics by name (case-insensitive partial match).

**Query Parameters:**

- `search` (string): Search query for filtering topics by name

**Example Request:**

```
GET /api/topics?search=javascript
```

**Response:**

```json
[
  {
    "id": 1,
    "name": "JavaScript Fundamentals",
    "category": "Programming"
  }
]
```

**Status Code:** `200 OK`

---

#### 3. Sort Topics

**Endpoint:** `GET /api/topics?sort=name`

**Description:** Returns topics sorted alphabetically by name in ascending order.

**Query Parameters:**

- `sort` (string): Must be `name`

**Example Request:**

```
GET /api/topics?sort=name
```

**Response:**

```json
[
  {
    "id": 7,
    "name": "CI/CD Pipelines",
    "category": "DevOps"
  },
  {
    "id": 10,
    "name": "Cloud Computing AWS",
    "category": "Cloud"
  }
]
```

**Status Code:** `200 OK`

---

#### 4. Combined Search and Sort

**Endpoint:** `GET /api/topics?search=<query>&sort=name`

**Description:** Searches and sorts topics simultaneously.

**Example Request:**

```
GET /api/topics?search=database&sort=name
```

**Response:**

```json
[
  {
    "id": 4,
    "name": "Database Design",
    "category": "Database"
  },
  {
    "id": 8,
    "name": "MongoDB Basics",
    "category": "Database"
  }
]
```

**Status Code:** `200 OK`

---

## 🧪 Testing the API

### Using cURL (Command Line)

```bash
# Get all topics
curl http://localhost:3000/api/topics

# Search topics
curl "http://localhost:3000/api/topics?search=node"

# Sort topics
curl "http://localhost:3000/api/topics?sort=name"

# Search and sort
curl "http://localhost:3000/api/topics?search=programming&sort=name"
```

### Using PowerShell

```powershell
# Get all topics
Invoke-RestMethod -Uri "http://localhost:3000/api/topics" -Method Get

# Search topics
Invoke-RestMethod -Uri "http://localhost:3000/api/topics?search=node" -Method Get

# Sort topics
Invoke-RestMethod -Uri "http://localhost:3000/api/topics?sort=name" -Method Get
```

### Using Browser

Simply open your browser and navigate to:

- `http://localhost:3000/api/topics`
- `http://localhost:3000/api/topics?search=javascript`
- `http://localhost:3000/api/topics?sort=name`

### Using Postman

1. Create a new GET request
2. Enter URL: `http://localhost:3000/api/topics`
3. Add query parameters as needed (`search`, `sort`)
4. Click Send

## 🚨 Error Handling

The API implements comprehensive error handling:

### 400 Bad Request

**Scenario 1: Invalid search parameter**

```json
{
  "error": "Invalid query parameter",
  "message": "Search parameter must be a string"
}
```

**Scenario 2: Empty search query**

```json
{
  "error": "Invalid query parameter",
  "message": "Search parameter cannot be empty"
}
```

**Scenario 3: Invalid sort parameter**

```json
{
  "error": "Invalid query parameter",
  "message": "Sort parameter must be \"name\""
}
```

---

### 404 Not Found

**Scenario: Endpoint doesn't exist**

```json
{
  "error": "Not found",
  "message": "The requested endpoint does not exist"
}
```

---

### 500 Internal Server Error

**Scenario: File read error or server issue**

```json
{
  "error": "Internal server error",
  "message": "Failed to retrieve topics"
}
```

## 🎬 Video Demonstration

**Video Link:** [Add your 2-minute video demonstration link here]

The video demonstrates:

1. Project structure overview
2. Code walkthrough
3. API endpoint testing
4. Search functionality demonstration
5. Sort functionality demonstration
6. Error handling scenarios

## 🛠️ Step-by-Step Workflow Process

### Development Process

1. **Project Initialization**

   - Created project structure with folders: `src/`, `data/`
   - Initialized npm project with `package.json`
   - Installed dependencies: Express, dotenv

2. **Data Layer**

   - Created `data/topics.json` with 10 sample topics
   - Each topic contains: `id`, `name`, `category`

3. **API Implementation**

   - Set up Express server in `src/server.js`
   - Implemented file reading functionality
   - Created `/api/topics` endpoint with GET method

4. **Search Functionality**

   - Added query parameter parsing for `search`
   - Implemented case-insensitive filtering using `toLowerCase()`
   - Validated search input

5. **Sort Functionality (Bonus)**

   - Added query parameter parsing for `sort`
   - Implemented alphabetical sorting using `localeCompare()`
   - Validated sort parameter value

6. **Error Handling**

   - Added validation for query parameters (400 errors)
   - Implemented try-catch for file operations (500 errors)
   - Created 404 handler for invalid routes
   - Added descriptive error messages

7. **Testing**

   - Tested all endpoints manually
   - Verified error scenarios
   - Confirmed response formats

8. **Documentation**
   - Created comprehensive README
   - Added API documentation with examples
   - Included setup and testing instructions

## 🔑 Key Features Implemented

| Requirement                       | Status | Implementation                 |
| --------------------------------- | ------ | ------------------------------ |
| GET /api/topics endpoint          | ✅     | `server.js` line 24            |
| Search by name (case-insensitive) | ✅     | `server.js` line 35-46         |
| JSON response format              | ✅     | All responses use `res.json()` |
| 200 status code (success)         | ✅     | `server.js` line 56            |
| 400 status code (invalid query)   | ✅     | `server.js` line 27-38         |
| 500 status code (server error)    | ✅     | `server.js` line 59-63         |
| 5+ topics in JSON file            | ✅     | 10 topics in `topics.json`     |
| Sort by name (bonus)              | ✅     | `server.js` line 49-51         |

## 🤝 Contributing

This is a case study project. For educational purposes only.

## 📝 License

ISC

## 👤 Author

[Your Name]

---

**Note:** Remember to add your GitHub repository link and video demonstration link after uploading to GitHub!
