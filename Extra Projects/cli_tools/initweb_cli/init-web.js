#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// File contents
const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Webpage</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <h1>Hello</h1>
    </main>
    <script src="./script.js"></script>
  </body>
</html>`;

const cssContent = `*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}
`;

const jsContent = ``;

// Create files
function createFile(fileName, content) {
  const filePath = path.join(process.cwd(), fileName);

  if (fs.existsSync(filePath)) {
    console.log(`⚠️ ${fileName} already exists`);
    return;
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Created ${fileName}`);
}

// Run
createFile("index.html", htmlContent);
createFile("style.css", cssContent);
createFile("script.js", jsContent);
