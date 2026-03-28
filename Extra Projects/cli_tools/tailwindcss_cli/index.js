#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");

console.log("🚀 Installing Tailwind...");

// 1. Install packages
execSync("npm install tailwindcss @tailwindcss/vite", {
  stdio: "inherit",
});

// 2. Ensure CSS
if (!fs.existsSync("src")) fs.mkdirSync("src");

fs.writeFileSync("src/index.css", '@import "tailwindcss";');

// 3. Update vite.config.js SAFELY
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
  console.log("✅ vite.config.js safely updated");
} else {
  console.log("⚠️ vite.config.js not found");
}

console.log("🎉 Tailwind setup complete!");
