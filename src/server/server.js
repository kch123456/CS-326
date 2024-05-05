import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, '../client')));

// Specific route to serve the login.html.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/login', 'login.html'));
});

// Handling 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
