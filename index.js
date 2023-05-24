const http = require('http');
const fs = require('fs');

// Define the color and welcome message
const color = 'purple';

// Read the HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Replace placeholders in the HTML file with actual values
  const modifiedHtml = html
    .replace('{{color}}', color)

  // Send the modified HTML as the response
  res.end(modifiedHtml);
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});

