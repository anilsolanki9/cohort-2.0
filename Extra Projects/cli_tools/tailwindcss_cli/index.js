#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀🌬️ Installing Tailwind...");

// 1. Install packages
execSync("npm install tailwindcss @tailwindcss/vite", {
  stdio: "inherit",
});

// 2. Ensure src folder exists
if (!fs.existsSync("src")) fs.mkdirSync("src");

// 3. Setup index.css
fs.writeFileSync("src/index.css", '@import "tailwindcss";');

// 4. Delete App.css if exists
const appCssPath = path.join("src", "App.css");
if (fs.existsSync(appCssPath)) {
  fs.unlinkSync(appCssPath);
  console.log("🗑️  Deleted src/App.css");
}

// 5. Overwrite App.jsx
const appJsxPath = path.join("src", "App.jsx");

const appTemplate = `import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
`;

fs.writeFileSync(appJsxPath, appTemplate);
console.log("✏️  Updated src/App.jsx");

// 6. Update vite.config.js SAFELY
const vitePath = "vite.config.js";

if (fs.existsSync(vitePath)) {
  let content = fs.readFileSync(vitePath, "utf-8");

  // ✅ Add import if missing
  if (!content.includes("@tailwindcss/vite")) {
    content = content.replace(/import\s+react.*\n/, (match) => match + `import tailwindcss from "@tailwindcss/vite";\n`);
  }

  // ✅ Add plugin WITHOUT touching existing ones
  if (!content.includes("tailwindcss()")) {
    content = content.replace(/plugins:\s*\[(.*?)\]/s, (match, inside) => {
      return `plugins: [${inside.trim() ? inside.trim() + ", " : ""}tailwindcss()]`;
    });
  }

  fs.writeFileSync(vitePath, content);
  console.log("✅  vite.config.js safely updated");
} else {
  console.log("⚠️  vite.config.js not found");
}

console.log("🎉🌬️  Tailwind setup complete!");
