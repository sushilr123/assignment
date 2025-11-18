const express = require("express");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Helper function to read topics from JSON file
const getTopicsFromFile = () => {
  try {
    const filePath = path.join(__dirname, "../data/topics.json");
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData.topics;
  } catch (error) {
    throw new Error("Failed to read topics data");
  }
};

// GET /api/topics endpoint
app.get("/api/topics", (req, res) => {
  try {
    const { search, sort } = req.query;

    // Validate search parameter if provided
    if (search !== undefined && typeof search !== "string") {
      return res.status(400).json({
        error: "Invalid query parameter",
        message: "Search parameter must be a string",
      });
    }

    // Validate sort parameter if provided
    if (sort !== undefined && sort !== "name") {
      return res.status(400).json({
        error: "Invalid query parameter",
        message: 'Sort parameter must be "name"',
      });
    }

    // Read topics from file
    let topics = getTopicsFromFile();

    // Filter topics by search query (case-insensitive)
    if (search) {
      const searchLower = search.toLowerCase().trim();

      // Return 400 if search is empty string
      if (searchLower === "") {
        return res.status(400).json({
          error: "Invalid query parameter",
          message: "Search parameter cannot be empty",
        });
      }

      topics = topics.filter((topic) =>
        topic.name.toLowerCase().includes(searchLower)
      );
    }

    // Sort topics by name if requested
    if (sort === "name") {
      topics = topics.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Return filtered and/or sorted topics
    res.status(200).json(topics);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({
      error: "Internal server error",
      message: "Failed to retrieve topics",
    });
  }
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Topic Retrieval API",
    endpoints: {
      topics: "/api/topics",
      search: "/api/topics?search=<query>",
      sort: "/api/topics?sort=name",
      combined: "/api/topics?search=<query>&sort=name",
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
    message: "The requested endpoint does not exist",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/topics`);
});

module.exports = app;
