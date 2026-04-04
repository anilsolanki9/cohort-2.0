# Episode 1 - Code

### 1. How the Internet Works:

- History of Web (Web 1.0 to Web 3.0 to Web 3).
- How computers communicate with each other.
- How computers send data all over the world.
- What is Domain Name, IP & MAC Addresses and Routing.
- How ISP and DNS work together to deliver data.
- Understanding Packets and Packet Switching.
- What are CDNs (Content Delivery Networks) and why they matter.
- Understanding Latency, Bandwidth, and Throughput.
- What is a Firewall and how it protects networks.
- How Wi-Fi and cellular networks connect to the internet.

### 2. Client-Server Architecture:

- What is Client-Server Model.
- Difference between Client (browser) and Server (the computer hosting your website).
- How HTTP request and response cycle works (how browser talks to server).
- What happens when you visit a website.
- Difference between Front-end and Back-end (Front-end vs Back-end).
- What are Static Websites and Dynamic Websites.
- What is web hosting and how it works.
- What is a Load Balancer and why it is used.
- Understanding Monolithic vs Distributed Systems.
- What is a Microservice and how it differs from a Monolith.
- Understanding Edge Computing and Serverless Architecture.

### 3. Internet Protocols:

- What is TCP protocol and why it is widely used.
- How connection is established using TCP (3-Way Handshake).
- What is UDP and why it is used for fast communication.
- How UDP establishes connection.
- Difference between TCP and UDP.
- What is the OSI Model and its 7 layers.
- What is the IP protocol — IPv4 vs IPv6.
- What is ICMP and how `ping` works.
- Understanding Ports and Sockets.
- What is NAT (Network Address Translation).

### 4. Understanding HTTP & HTTPS

- What is HTTP and its different versions (HTTP/1.1, HTTP/2, HTTP/3).
- HTTP status codes for responses (1xx, 2xx, 3xx, 4xx, 5xx) with common examples.
- What is HTTPS and why it is better than HTTP.
- How HTTPS provides a secure connection.
- What is SSL/TLS Encryption — handshake process explained.
- What are Proxy and Reverse Proxy.
- How VPN works and helps accessing restricted content.
- Understanding HTTP Headers — `Content-Type`, `Authorization`, `Cache-Control`, `CORS headers`.
- What are Cookies, and how they work with HTTP.
- Understanding REST vs GraphQL vs gRPC at a high level.
- What is CORS and why it exists.

### 5. Preparing Your Machine

- Installing & Setting up VS Code.
- Installing helpful extensions — `Prettier`, `ESLint`, `GitLens`, `Live Server`, `Path Intellisense`.
- Setting up your browser for development (DevTools overview).
- What are files and folders and how to create them.
- Introduction to the terminal/command line basics.
- Testing our environment via serving a webpage — `"Namaste Duniya"`.
- Setting up Node.js and npm on your machine.
- Understanding environment variables and `.env` files.

---

# Episode 2 - Stage

### 1. Starting with HTML

- Understanding HTML and its use cases.
- How Browsers Render Pages – HTML parsing → `CSSOM` → `Render Tree` → Paint.
- Understanding `Reflow` & `Repaint` – Why `layout` shifts happen.
- Creating first HTML page in VS Code.
- Understanding HTML Structure.
- Understanding Tags and building simple HTML page — `doctype`, `html`, `head`, `title`, `body`.
- Working with text elements — `h tags`, `p tag`, `br tag`, `a tag`, `span`, `code`, `pre`.
- Working with HTML Lists (Ordered & Unordered lists) — `ol`, `ul`, `li`.
- Understanding concept of nested elements in HTML.
- Working with Media Tags — `img`, `video`, `audio`.
- HTML attributes — `href`, `target`, `alt`, `src`, `width`, `height`.
- Navigating between pages.
- Understanding `data-*` attributes and custom data attributes.
- What is the `meta` tag and why it matters for SEO and responsiveness. 
- SEO Impact of `Semantic HTML` – Why structure improves search ranking.

### 2. More on HTML

- Understanding semantic tags — `article`, `section`, `main`, `aside`, `form`, `footer`, `header`, `details`, `figure`, `nav`, `time`, `address`.
- Differentiating between block and inline elements.
- Text formatting tags in HTML — `b`, `strong`, `i`, `small`, `ins`, `sub`, `sup`, `del`, `mark`.
- Working with HTML tables — `table`, `td`, `tr`, `th`, `thead`, `tbody`, `tfoot`, `colspan`, `rowspan`.
- Understanding HTML entities — `&nbsp;`, `&lt;`, `&gt;`, `&amp;`.
- What is accessibility (a11y) in HTML — `aria-label`, `role`, `aria-hidden`, `tabindex`.
- Using `<dialog>` element for native modals.
- Understanding `<template>` and `<slot>` elements.

### 3. HTML Forms and Inputs

- What is a Form and why it is important.
- Creating a simple Form with tags — `form`, `input`, `textarea`, `select`, `button`, `label`.
- Types of input fields — `checkbox`, `text`, `color`, `file`, `tel`, `date`, `number`, `radio`, `submit`, `range`, `email`, `password`, `search`, `url`, `datetime-local`.
- Attributes of Form Elements — `method`, `action`, `target`, `novalidate`, `enctype`, `name`, `required`, `placeholder`, `autocomplete`, `autofocus`, `disabled`, `readonly`, `min`, `max`, `pattern`, `maxlength`.
- Client-side HTML form validation using built-in attributes.
- Using `<fieldset>` and `<legend>` for grouping form controls.
- Understanding form accessibility — linking `label` to `input` with `for` and `id`.

### 4. Media Tags in HTML

- Understanding `audio` and `video` tags.
- Attributes of media tags — `src`, `width`, `height`, `alt`, `muted`, `loop`, `autoplay`, `controls`, `media`, `poster`, `preload`.
- Using `<source>` element for alternative media files.
- Embedding content with `<iframe>` — YouTube, Google Maps.
- Understanding `<canvas>` and `<svg>` for drawing in the browser.
- Responsive images with `srcset` and `sizes`.
- Lazy loading images with `loading="lazy"`.

### 5. Basics of CSS (Cascading Style Sheet)

- Introduction to CSS and why it is important.
- Understanding Syntax, Selectors and comments in CSS.
- Adding CSS to HTML Page — `Inline`, `Internal`, `External`.
- Understanding difference between selectors — `class`, `id`, `element`, `universal (*)`, `attribute`, `grouping selectors`, `parent selector` .
- Understanding precedence of selectors — specificity explained. 
- `Specificity` & `Cascade` – Why some styles override others.
- How to style text using CSS — `font-family`, `font-style`, `font-weight`, `line-height`, `text-decoration`, `text-align`, `text-transform`, `letter-spacing`, `word-spacing`, `text-shadow`.
- CSS Custom Properties (Variables) — `--variable-name`, `var()`.
- Understanding the Cascade and Inheritance in CSS.
- Using `@import` to import external stylesheets and Google Fonts.

### 6. Styling With CSS

- Working with colors in CSS — `name`, `rgb`, `rgba`, `hsl`, `hsla`, `hex`.
- Working with CSS units — `%`, `px`, `rem`, `em`, `vw`, `vh`, `min`, `max`, `ch`, `dvh`.
- Working with borders and border styling — `border-radius`, `border-image`, `outline`.
- Working with box properties — `margin`, `padding`, `box-sizing`, `height`, `width`, `min-height`, `max-width`.
- Understanding Background properties — `background-size`, `background-attachment`, `background-image`, `background-repeat`, `background-position`, `linear-gradient`, `radial-gradient`.
- Implementing `box-shadow` and `text-shadow` properties.
- Working with `filter` property — `blur`, `brightness`, `contrast`, `grayscale`.
- Understanding `opacity` and `visibility`.
- CSS `calc()` function for dynamic calculations.
- Working with `clip-path` for creative shapes.

### 7. More about CSS

- Applying display properties — `inline`, `grid`, `flex`, `none`, `inline-block`, `contents`.
- Introduction to FlexBox for aligning and structure — `flex-direction`, `order`, `flex-wrap`, `flex-grow`, `flex-shrink`, `justify-content`, `align-items`, `align-content`, `align-self`, `flex-basis`, shorthand properties of flex.
- Understanding CSS Grid for making layouts — `grid-template-columns`, `grid-template-rows`, `grid-area`, `gap`, `auto-fit`, `auto-fill`, `minmax()`, `fr` unit.
- Working with positional properties — `absolute`, `relative`, `static`, `sticky`, `fixed`.
- Understanding Overflow — `visible`, `hidden`, `scroll`, `auto`.
- Working with Grouping Selectors.
- Why we use Nested Selectors (native CSS nesting with `&`).
- Understanding `z-index` and stacking contexts.
- CSS `aspect-ratio` property.
- Working with `object-fit` and `object-position` for images.

### 8. Interesting things about CSS ✌️

- Applying pseudo-classes and Pseudo-Elements — `hover`, `focus`, `after`, `before`, `active`, `first-child`, `last-child`, `nth-child`, `not()`, `is()`, `where()`, `has()`.
- Learning CSS Transitions — `properties`, `duration`, `timing functions`, `delays`.
- Creating with `Transform` — `translate`, `rotate`, `scale`, `skew`, `transform-origin`.
- Working with `3D Transform` — `translate3d()`, `translateZ()`, `scale3d()`, `scaleZ()`, `rotate3d()`, `rotateZ()`, `perspective()`.
- Understanding `CSS Animation` — `@keyframes`, `animation-name`, `animation-duration`, `animation-fill-mode`, `animation-iteration-count`, `animation-play-state`.
- CSS `will-change` for performance optimization of animations.
- Working with `scroll-behavior: smooth` and scroll-snap.
- Using `@supports` for feature detection in CSS.
- Creating CSS-only components — dropdowns, toggles, tabs.

### 9. Responsive with CSS 🖥️

- Difference between Mobile-first and Desktop-first approaches.
- Measurement units for Responsive Design — `px`, `in`, `mm`, `%`, `rem`, `vw`, `vh`.
- Using Viewport meta element for responsive design.
- Setting up Images and Typography for responsiveness.
- What are Media queries — `@media`, `max-width`, `min-width`, `orientation`, `prefers-color-scheme`, `prefers-reduced-motion`.
- Using CSS functions — `clamp()`, `max()`, `min()`.
- Understanding HTML structure for Responsive Design.
- Responsive typography with fluid type scales.
- Container Queries (`@container`) — the next evolution beyond media queries.
- Responsive images — `srcset`, `<picture>`, `sizes`.

### 10. Working With SASS (SASSY) my favorite 🤩

- What is SASS? — `Variables`, `Nesting`, `Mixins`, `Functions and Operators`, `@extend`, `Partials`, `@use`, `@forward`.
- Setting up environment for SCSS.
- SCSS or SASS? — Differences and choosing SCSS syntax.
- Writing reusable Mixins with arguments.
- Using `@each`, `@for`, `@while` loops in SCSS.
- Organizing large stylesheets using Partials and the `7-1 pattern`.
- Building a design token system with SCSS variables.
- Advanced Concepts :- `Control Directives` , `Color Functions`

---
- Introduction to `CSS` frameworks and their role in `modern frontend` development.
- Understanding `utility-first` vs `component-based styling` approaches.
- Overview of `TailwindCSS` and why it is popular among developers.
- Setting up `TailwindCSS` in a project.
- Working with `Tailwind utility classes` for `layout`, spacing, colors, and typography.
- Building responsive `layouts` using `TailwindCSS`.
- Introduction to `Bootstrap` and its `component-based design` system.
- Using the `Bootstrap` `grid system` for `responsive layouts`.
- Working with common `Bootstrap` components like navbar, cards, and buttons.
- Customizing `Bootstrap` styles for `real-world projects`.
- Comparing `TailwindCSS` and `Bootstrap`.
- When to use `TailwindCSS` vs `Bootstrap` in practical development.
---

### 11. Basics of JavaScript with ES6+ Features 🚀

- Introduction to JavaScript, why it is important, and what it can do.
- How to link JavaScript files using `script` tag — `defer` vs `async`.
- Running JavaScript in the Browser Console.
- Variables and Keywords — `var`, `let`, `const` and their differences.
- Logging with JavaScript — `console.log()`, `console.info()`, `console.warn()`, `console.error()`, `console.table()`, `prompt`, `alert`.
- Working with Strings — `splice`, `slice`, `template literals`, `split`, `replace`, `includes`, `padStart`, `padEnd`, `trimStart`, `trimEnd`.
- What are Statements and Semicolons in JS.
- How to add Comments in JavaScript.
- What are Expressions and the difference between expression and statement.
- JavaScript Data Types — `float`, `number`, `string`, `boolean`, `null`, `array`, `object`, `Symbol`, `BigInt`, `undefined`.
- Some Important Values — `undefined`, `null`, `NaN`, `Infinity`.
- Reference and Primitive Data Types in JavaScript.
- Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise, Nullish Coalescing `??`, Optional Chaining `?.`).
- Variable hoisting in JavaScript.
- Understanding Type Coercion — implicit vs explicit.
- `typeof` and `instanceof` operators.

### 12. Loops & Conditionals in JavaScript

- Understanding Conditional Operators — `if`, `else`, `if-else`, `else-if`, `Ternary Operator`, `switch`, `nullish coalescing (??)`.
- `for` Loop in JavaScript.
- `while` Loop in JavaScript.
- `do...while` in JavaScript.
- `forEach` in JavaScript.
- `for...in` Loop in JavaScript.
- `for...of` Loop in JavaScript.
- Recursion in JavaScript.
- Loop control statements — `break`, `continue`, labeled statements.
- Understanding short-circuit evaluation with `&&` and `||`.

### 13. Functions in JavaScript

- Understanding Functions in JavaScript — `parameters`, `arguments`, `rest parameters`, `hoisting`, `Variable Hoisting`, `Function Hoisting`.
- Parameters in JavaScript — `required`, `destructured`, `rest`, `default`.
- Arguments in JavaScript — `positional`, `default`, `spread`.
- `Classic Function`, `Nested Function`, `Scope Chain` in JavaScript.
- Understanding Immediately Invoked Function Expression (IIFE).
- More Functions in JavaScript — `Arrow Function`, `Anonymous`, `Higher Order`, `Callback`, `First Class`, `Pure Function`, `Impure Function`.
- Understanding Scoping — `Global scope`, `Function scope`, `Block scope`.
- Understanding `Closures` and `Scoping Rules`.
- `Generator Functions` — `function*`, `yield`, `next()`.
- Understanding `Symbol.iterator` and creating custom iterables.
- `Currying` and `Partial Application` in JavaScript.

### 14. Arrays and Objects in JavaScript

- What are Arrays and how to create them.
- Accessing Elements in Arrays.
- Functions on Arrays — `push`, `pop`, `shift`, `unshift`, `indexOf`, `array destructuring`, `filter`, `some`, `every`, `find`, `findIndex`, `map`, `reduce`, `flat`, `flatMap`, `spread operator`, `slice`, `splice`, `reverse`, `sort`, `join`, `toString`, `Array.from`, `Array.isArray`.
- Iterating Over Arrays using `for` loop, `forEach`, `for...of`.
- What is an `Object`? – Real-world modeling with `key-value` data.
- `Key-Value` Pairs – Understanding `properties` and `values`.
- Accessing Properties – `Dot notation` vs `bracket notation`.
- Creating Objects,  Deleting Property and Nested Objects.
- How Objects are Stored, Traversing Keys — `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.assign()`, `Object.fromEntries()`.
- Array as Object — understanding reference types.
- Timing Events — `setTimeout()`, `setInterval()`, `clearTimeout()`, `clearInterval()`.
- Operations in Objects — `freeze`, `seal`, `destructuring`, `object methods`, `this keyword`, `computed property names`, `shorthand properties`.
- Working with `Map` and `Set` data structures.
- `WeakMap` and `WeakSet` — what they are and when to use them.

### 15. Document Object Model Manipulation

- Introduction to DOM in JavaScript.
- Understanding DOM Structure and Tree — `nodes`, `elements`, `document`.
- Fetching Elements in DOM — `getElementById`, `getElementsByTagName`, `getElementsByClassName`, `querySelectorAll`, `querySelector`.
- DOM Tree Traversal — `parentNode`, `parentElement`, `childNodes`, `children`, `firstChild`, `firstElementChild`, `nextSibling`, `nextElementSibling`.
- Manipulating DOM Elements — `innerHTML`, `textContent`, `innerText`, `setAttribute`, `getAttribute`, `removeAttribute`, `style property`, `classList`.
- Creating and Removing DOM Elements — `createElement()`, `appendChild()`, `insertBefore()`, `insertAdjacentElement()`, `removeChild()`, `replaceChild()`, `cloneNode()`.
- Understanding `DocumentFragment` for batch DOM updates.
- Working with `dataset` and custom data attributes in DOM.

### 16. Event Handling in JavaScript

- Event Handling — `addEventListener()`, `removeEventListener()`, `event bubbling`, `event capturing`, `event.target`, `event.currentTarget`.
- Understanding Event Delegation.
- Scroll Events, Mouse Events, Key Events, Touch Events and `'use strict'` mode.
- Working with Forms and Input Elements — `Accessing Form Data`, `Validating Forms`, `preventDefault()`, `onsubmit`, `onchange`, `oninput`.
- Working with Classes — Adding, Removing, Toggling (`classList` methods — `add`, `remove`, `toggle`, `contains`, `replace`).
- Browser Events — `DOMContentLoaded`, `load`, `resize`, `scroll`, `visibilitychange`.
- Pointer Events and Drag-and-Drop events.
- Custom Events with `new CustomEvent()` and `dispatchEvent()`.

### 17. Using Browser Functionalities in JavaScript

- Browser Object Model — `window`, `navigator`, `history`, `location`, `document`, `screen`.
- Window Object — `window.location`, `window.history`, `window.open()`, `window.matchMedia()`.
- Working with Storage — `LocalStorage`, `SessionStorage`, `Cookies`, `IndexedDB` overview.
- Web APIs in DOM — `Fetch API`, `Clipboard API`, `Geolocation API`, `Notification API`, `Intersection Observer API`, `MutationObserver`, `ResizeObserver`.
- Understanding the `URL` and `URLSearchParams` API.
- Using `requestAnimationFrame()` for smooth animations.

### 18. Object Oriented Concepts in JavaScript

- Introduction to OOP in JavaScript.
- Understanding `classes` and `objects` in JavaScript.
- Understanding `Constructor` and `Prototypes` — `this keyword`, `call`, `apply`, `bind`, `Prototype Chain`.
- More Topics in OOP — `class expression`, `hoisting`, `inheritance` with `extends` and `super`, `getter & setter`, `static` methods and properties.
- Understanding `Mixins` as an alternative to multiple inheritance.
- Difference between `Object.create()` and `class` syntax.
- Private class fields with `#` syntax.

### 19. Asynchronous Programming in JavaScript

- Introduction to Asynchrony in JavaScript — the Event Loop explained.
- Introduction to `callbacks` and Problems in Callbacks (Callback Hell).
- Understanding `Promises` — `pending`, `resolved`, `rejected`, `.then()`, `.catch()`, `.finally()`.
- `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, `Promise.any()`.
- How to prevent callback hell using `async` & `await`.
- `setInterval` & `setTimeout` in JavaScript.
- Understanding the Microtask Queue vs the Macrotask Queue.
- Introduction to Web Workers for background thread processing.

### 20. Error Handling in JavaScript

- Introduction to Error Handling.
- Common types of errors — `SyntaxError`, `ReferenceError`, `TypeError`, `RangeError`, `URIError`, `EvalError`.
- Understanding the Error object — `message`, `name`, `stack`.
- Handling exceptions using `try-catch`, `try-catch-finally`.
- How to Throw Errors in JavaScript.
- How to create Custom Errors using `class MyError extends Error`.
- Error Handling in Asynchronous Code — `.catch()` on Promises, `try-catch` with `async/await`.
- Global error handling — `window.onerror`, `window.onunhandledrejection`.

### 21. Kuch Baatein Advanced JavaScript Pr ⚙️

- Throttling and Debouncing in JavaScript.
- JSON Handling — `JSON.parse()`, `JSON.stringify()`, handling circular references.
- Understanding `Proxy` and `Reflect` in JavaScript.
- `Symbol` — built-in symbols like `Symbol.iterator`, `Symbol.toPrimitive`.
- Internationalization API — `Intl.DateTimeFormat`, `Intl.NumberFormat`.
- Understanding Memory Management and Garbage Collection.
- `structuredClone()` for deep cloning objects.
- Module pattern and understanding ES Modules (`import`/`export`) vs CommonJS (`require`).

### 22. TypeScript Fundamentals 🔷

- What is TypeScript and why use it over JavaScript.
- Thinking in `TypeScript` – Types-first mindset.
-  Installing and Setting Up `TypeScript`. Setting up TypeScript — `tsc`, `tsconfig.json`.
- Basic Types — `string`, `number`, `boolean`, `any`, `unknown`, `never`, `void`, `null`, `undefined`.
- Type Inference vs Explicit Typing. 
- Interfaces and Type Aliases.   Interfaces vs Type `Aliases` – When to use what.
- Union Types (`|`), Intersection Types (`&`), Literal Types.  – Modeling flexible data.
- Generics — writing reusable, type-safe functions and classes.
- Generic Interfaces and Constraints – Safe boundaries.
- TypeScript Tooling
- `tsconfig.json` Explained.
- TypeScript Compiler (`tsc`).
- `Linting` and `Formatting` with `TypeScript`.
- Enums in TypeScript.
- TypeScript with DOM — typing events and elements.
- Using TypeScript in real projects — strict mode best practices.

### 23. Git and Github

- What is Git and Github.
- Concepts — `git init`, `git add`, `git commit`, `Understanding branches`, `Making branches`, `merging branches`, `conflict in branches`, `understanding workflow`, `pushing to GitHub`.
- How to use GitHub with team members — forking, PRs (Pull Requests), open source contribution, workflow with large teams.
- `.gitignore` — what to ignore and why.
- Understanding `git stash`, `git rebase`, `git cherry-pick`, `git bisect`.
- Semantic Commit Messages — Conventional Commits specification.
- GitHub Actions overview — automating workflows with CI/CD.
- Protecting branches and code review best practices.

---

# Episode 3 - Commit

### 1. Introduction to React 🪫

- What is React and why use it.
- What are Components and types of Components — `class component`, `function components`.
- Understanding Single Page Applications (SPAs) vs Multi-Page Applications (MPAs).
- Difference between `Real DOM` and `Virtual DOM` and reconciliation.
- `NPM` Basics — Installing Packages, `npx`.
- How updates work in React — Diffing Algorithm, Fiber Architecture overview.
- ES6+ features — `Import & Exports`, destructuring, spread, rest.
- Difference between React and other Frameworks (`Angular`, `Vue`, `Svelte`).
- Basic Terminal Commands — `pwd`, `ls`, `cd`, `clear`, `mkdir`, `rm`, `cp`, `mv`.
- Setting up React with `Vite` — why Vite over Create React App.
- Install React Boilerplate and React Developer Tools.
- Understanding `JSX` — rules, `Fragments`, `Components Naming`.
- Creating and understanding best practices for Components — single responsibility principle.
- React StrictMode and what it does.

### 2. Styling in React 🐼

- Different Styling Approaches — `Inline Styles`, `CSS Modules`, `Global CSS`, `Styled Components`, `Tailwind CSS`.
- Importance of component-based styling.
- Dynamic Styling Based on Props or State.
- Responsive Design in React.
- Media queries with CSS, `styled-components`, and Tailwind utility classes.
- CSS-in-JS trade-offs — performance, DX.
- Using `clsx` or `classnames` library for conditional class management.
- Design systems in React — building reusable UI component libraries.

### 3. Animations 🔥

- Animation and Transitions — CSS transitions in React.
- Using `framer-motion` for declarative animations — `motion.div`, `variants`, `AnimatePresence`, `useAnimation`.
- Using `GSAP` for advanced timeline animations.
- Page transition animations with React Router + Framer Motion.
- Optimizing animation performance — GPU-composited properties (`transform`, `opacity`).

### 4. React Basics 🔦

- Creating Components with `functions`.
- Importing CSS files and CSS Modules — `Styled Components`, `Dynamic styling with styled-components`.
- Creating state and managing it with `useState`.
- Creating Parameterized Function Components.
- `React Props` — Passing Data to Components, prop types validation with `PropTypes`.
- Function chaining in React and Conditional Rendering — `&&`, ternary operator.
- Rendering Array Data via `map`, Eliminating Array Data via `filter`.
- Understanding `keys` and why they matter in lists.
- Lifting State Up — sharing state between sibling components.
- Controlled vs Uncontrolled Components.

### 5. More on React 📽️

- `Higher Order Components` (HOC) in React.
- Reusing Components, Lists and Keys.
- Sharing Data with child components — `Props Drilling` and its problems.
- Rendering a List, Mapping and Component Lifecycle — `Mounting`, `Updating`, `Unmounting`.
- Understanding React Component Lifecycle.
- Different Lifecycle Methods — `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.
- `Render Props` pattern.
- `Compound Components` pattern.
- Error Boundaries — `componentDidCatch`, `getDerivedStateFromError`.

### 6. Useful Hooks in React 🪝

- Understanding React Hooks and their rules.
- Commonly Used Hooks — `useState`, `useEffect`, `useContext`, `useRef`, `useCallback`, `useMemo`, `useReducer`, `useLayoutEffect`, `useId`, `useTransition`, `useDeferredValue`.
- `Custom Hooks` — when and how to create them, naming conventions.
- Understanding and Applying `Context API`.
- `useImperativeHandle` with `forwardRef`.
- React 19 features overview — `use()` hook, Actions, `useOptimistic`.

### 7. Navigation in React with React Router 🚧

- Introduction to React Router v6+.
- Setting up and Configuring React Router — `react-router-dom`.
- Navigating Between Pages with `<Link>` and `<NavLink>`.
- Passing Data while Navigating.
- Dynamic Routing with `useParams`.
- URL Parameters and Query Strings with `useSearchParams`.
- Nested Routes with `<Outlet>`.
- Programmatic Navigation using `useNavigate`.
- Route loaders and actions (Data Router pattern).
- Protected Routes — implementing auth guards.
- Handling `404` Pages — fallback routes for unmatched paths.
- Lazy-loaded routes with `React.lazy` + `Suspense`.

### 8. State Management Using Redux 🏪

- Introduction to `Redux` — What is it, When and Why to use it.
- Principles of Redux — Single source of truth, State is read-only, Pure reducers.
- Understanding Redux Flow — Action → Reducer → Store → View.
- Why Redux needs reducers to be `pure functions`.
- Redux Basics — `Actions`, `Reducers`, `Store`, `Middleware`, `Async Actions with Thunk`.
- Connecting Redux to React with `react-redux` — `useSelector`, `useDispatch`.
- Introduction to `Redux Toolkit` (RTK) — `createSlice`, `createAsyncThunk`, `configureStore`.
- `RTK Query` for data fetching and caching.
- Alternatives — `Zustand`, `Jotai`, `Recoil`, `MobX`, `Valtio` — when to use each.
- Redux DevTools for debugging.

### 9. Form Controls in React 📋

- Introduction to Forms in React.
- Building Basic Forms with controlled components.
- Creating form elements — `input`, `textarea`, `select`, etc.
- Two-way binding — `value` + `onChange`.
- Handling Form Events — `onChange`, `onSubmit`, `event.preventDefault()`.
- Validation in React Forms — writing custom validators.
- Form libraries — `React Hook Form` (performance-first) and `Formik` (DX-first).
- Schema-based validation with `Zod` or `Yup`.
- Integrating Forms with APIs using `fetch` or `axios`.
- Handling loading states, success and error feedback.
- File upload handling in forms.

### 10. Performance Optimization 🏎️

- Code Splitting with `React.lazy` and `Suspense`.
- Memoization Techniques — `React.memo`, `useMemo`, `useCallback`.
- Avoiding unnecessary Re-Renders.
- Optimizing Component Structure — keeping state close to where it's used.
- Virtualization for long lists — `react-virtual`, `react-window`.
- Performance Profiling — `Chrome DevTools`, `React Profiler`, `Lighthouse`, `Web Vitals`.
- Understanding Core Web Vitals — `LCP`, `INP`, `CLS`.
- Image optimization strategies in React.
- Avoiding prop drilling with Context — but knowing when Context itself causes re-renders.
- Concurrent Features — `useTransition`, `useDeferredValue`, `Suspense` for data.

### 11. Deploying React Projects 🚨

- Preparing a React App for `Production` — `npm run build`, analyzing bundle.
- Environment Variables in React — `import.meta.env` (Vite), `.env` files.
- Deployment Platforms — `Netlify`, `Vercel`, `GitHub Pages`, `Cloudflare Pages`.
- Custom domains, HTTPS, and redirect rules.
- Understanding build output — chunks, hashing, and caching strategies.
- Setting up CI/CD with GitHub Actions for automatic deploys.

### 12. Real-World Project with React 👷🏻‍♂️

- Building a Complete React Project.
- Combining All Concepts — `Routing`, `State Management`, `API`, `Auth`.
- Styling and Responsiveness.
- Optimizing and Deploying the Project.
- Writing tests for the project — unit and integration tests.
- Code reviews and PR workflow simulation.

### 13. SEO Principles

- On-Page Optimization in SEO.
- Guide to SEO Meta Tags — `title`, `description`, `og:*`, `twitter:card`.
- Image SEO Best Practices — `alt`, `WebP`, lazy loading.
- Internal Link Building SEO.
- Creating an XML Sitemap for a Website.
- `robots.txt` — what it is and how to configure it.
- Structured Data with `JSON-LD` / Schema.org.
- Core Web Vitals and their impact on SEO rankings.
- SEO for SPAs — the challenges and solutions (SSR, pre-rendering).

### 14. Three.js and React Three Fiber

- Understanding what is a `Scene`, `Camera`, `Renderer`.
- Using `3D models` (GLTF/GLB) for animation with `useGLTF`.
- Controlling view with `OrbitControls`.
- Applying `Lights` inside the scene — `AmbientLight`, `DirectionalLight`, `PointLight`, `SpotLight`.
- Understanding different types of `Cameras` — Perspective vs Orthographic.
- Animating the `mesh` with `useFrame`, `GSAP`, or `Framer Motion`.
- Different types of `Geometries` — Box, Sphere, Plane, Torus, custom BufferGeometry.
- Using different `Materials` — `MeshBasicMaterial`, `MeshStandardMaterial`, `ShaderMaterial`.
- Post-processing effects with `@react-three/postprocessing`.
- Performance tips for 3D on the web — LOD, texture compression, instancing.

---

# Episode 4 - Push

### 1. Starting with Node.js 🏁

- Introduction to Node.js — event-driven, non-blocking I/O architecture.
- Getting Our Tools — `Node.js LTS`, `Postman`, `VS Code`.
- Running `scripts` with `node` — `"Namaste Duniya"`.
- `NPM` Basics — Installing Packages, global vs local, `npx`.
- Creating and Managing `package.json` and `package-lock.json`.
- Understanding `node_modules` and the dependency tree.
- CommonJS (`require`/`module.exports`) vs ESModules (`import`/`export`) in Node.
- Working with built-in modules — `fs`, `path`, `os`, `events`, `crypto`, `stream`.
- Understanding the Node.js Event Loop in depth.
- Using `Buffer` and `Stream` for handling large data.

### 2. Creating a Server 📱

- What is a Server and how it works.
- Setting Up Our First `Node.js Server` using `http` module.
- Serving a Response to the Browser.
- `Routing` in HTTP Servers.
- Understanding Status Codes — `1xx`, `2xx`, `3xx`, `404`, `200`, `201`, `500`, `422`, `403`, `401`, `400`, `429`.
- Installing `Nodemon` for Automatic Server Restarts.
- Parsing request bodies manually — `JSON`, `urlencoded`.
- Streaming large responses with `res.write()` and `res.end()`.

### 3. Different Architectures 🏯

- Different Architectures — `MVC`, `SOA`, `Hexagonal (Ports & Adapters)`, `Clean Architecture`.
- Understanding MVC Architecture — `Model`, `View`, `Controller`.
- MVC in the context of REST APIs.
- Understanding Layered Architecture — `Routes → Controllers → Services → Repositories`.
- Repository Pattern for database abstraction.
- Dependency Injection — concept and benefit.

### 4. Web Framework - Express.js 🚀

- What is `Express.js` and why to use it.
- Setting Up `Express Server`.
- Returning Responses from the server — `res.json()`, `res.send()`, `res.status()`.
- Using `Query Parameters` and `URL Parameters`.
- HTTP Requests — `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`.
- Serving Static Files with `express.static()`.
- Working with `Router` — `express.Router()` for modular routes.
- Request and Response object deep dive — `req.body`, `req.headers`, `req.cookies`, `req.ip`.
- Chaining route handlers — `router.route('/path').get().post()`.

### 5. Template Engine - EJS 🚜

- What is a Template Engine and its use.
- Template Engine Options — `Handlebars`, `EJS`, `Pug` — tradeoffs.
- Setting Up `EJS` — `app.set('view engine', 'ejs')`.
- Rendering our first page with `EJS` — `<%= %>`, `<% %>`, `<%- %>`, `<%# %>`.
- Loop statements, Conditional statements and Locals in views.
- Accessing Static Files inside `EJS`.
- Partials in EJS — reusing header, footer, navbar components.
- Passing data from routes to views with `res.render()`.

### 6. Middleware in Express.js 🐵

- Understanding `middleware` in Express — the `(req, res, next)` signature.
- Implementing `middleware` with Express.
- Different types of middleware — `builtIn` (`express.json`, `express.urlencoded`), `third-party` (`morgan`, `helmet`, `cors`), `custom`.
- Different levels of middleware — `Application-Level`, `Router-Level`, `Error-Handling`.
- Error-Handling middleware — the `(err, req, res, next)` signature.
- Security middleware — `Helmet` for HTTP headers, `CORS` configuration.
- Rate-limiting middleware — `express-rate-limit`.
- Understanding middleware execution order and importance.

### 7. Handling Files with Express 📁

- Understanding `Multer` and its use case.
- Uploading files with Multer — single and multiple file uploads.
- Understanding `Memory` and `Disk` Storage.
- Accessing uploaded files via `req.file` and `req.files`.
- File type and size validation with Multer.
- Working with `express.static`.
- Using `Cloudinary` or `Imagekit` for real-time media processing and digital asset management.
- Streaming file downloads with `res.download()` and `res.sendFile()`.
- Handling large file uploads efficiently.

### 8. Database Basics 🗄️

- Relational and non-relational Databases — `MongoDB` & `MySQL` / `PostgreSQL`.
- What is `MongoDB`? Why use it? When NOT to use it.
- Installing MongoDB Compass and accessing DB via terminal.
- Setting Up MongoDB `Locally` and in the `Cloud` (Atlas).
- Understanding `Datatypes`, `Collections` and `Documents`.
- Connecting MongoDB to Node.js with `Mongoose` — schemas, models.
- Database Relations — `One to One`, `One to Many`, `Many to Many`, `Polymorphic`.
- Handling Relationships with Mongoose (`populate`, `virtual fields`).
- Introduction to `PostgreSQL` — tables, schemas, SQL basics.
- Using `Prisma ORM` for type-safe SQL database access.
- Understanding transactions and ACID properties.
- Choosing between SQL and NoSQL for different use cases.

### 9. API Development (REST) ⛓

- What is a REST API — constraints and principles (stateless, uniform interface).
- Versioning in RESTful APIs — `/v1/`, `/v2/`.
- Using `Postman` for API Testing — `Send Requests`, `Save Collections`, `Write Tests`, `Environments`.
- Understanding Status Codes — `2xx`, `4xx`, `5xx` with specific examples.
- Validating API Inputs — `express-validator`, `Zod`, `Joi`.
- Security Handling — Rate Limiting, `XSS Attack`, `CSRF Attack`, `DOS Attack`, `SQL Injection`, `NoSQL Injection`.
- API response standardization — consistent response envelope `{ success, data, message, errors }`.
- Pagination strategies — offset-based, cursor-based.
- Filtering, sorting, and searching in APIs.
- Introduction to `GraphQL` as an alternative to REST — queries, mutations, resolvers.
- API documentation with `Swagger` / `OpenAPI` specification.
- `HATEOAS` — hypermedia as the engine of application state.

### 10. Database Optimization 🧘🏻

- `Indexing` for Performance — `Single-Field`, `Compound`, `Text`, `Wildcard`, `Partial` indexes.
- Best practices with Indexing — `explain()`, index strategies.
- MongoDB `Aggregation` pipeline.
- Comparison Operators — `$eq`, `$ne`, `$lt`, `$gt`, `$lte`, `$gte`, `$in`, `$nin`.
- Logical Operators — `$not`, `$and`, `$or`, `$nor`.
- Array Operators — `$pop`, `$pull`, `$push`, `$addToSet`, `$elemMatch`.
- Aggregation `Stages` — `$match`, `$group`, `$project`, `$sort`, `$lookup`, `$unwind`, `$limit`, `$skip`, `$count`.
- Creating parallel pipelines with `$facet`.
- MongoDB Operators — Comparison, Regex, Update, Aggregation.
- Query optimization — avoiding full collection scans, using projections.
- Understanding the WiredTiger storage engine and memory usage.
- Connection pooling in Mongoose.

### 11. Logging in Express.js

- Why is `Logging` Important — structured logs for production observability.
- Setting Up Logging — `Winston`, `Pino`, `Morgan`.
- Different modes of Morgan — `dev`, `short`, `tiny`, `combined`.
- Log Levels — `error`, `warn`, `info`, `http`, `debug`.
- Structured JSON logging for log aggregation services.
- Error Handling and Logging — logging stack traces, request context.
- Log rotation — managing log file sizes in production.
- Integrating with log platforms — `Datadog`, `Logtail`, `Papertrail` overview.

### 12. Production Project Structure 🗼

- Understanding the Basic Structure — `src/`, `config/`, `routes/`, `controllers/`, `services/`, `middlewares/`, `models/`, `utils/`, `tests/`.
- File Naming Conventions and Git Configuration.
- Role of `package.json`, `.env`, `.gitignore`, `.npmrc`.
- Production Environment — `PM2` for process management, clustering.
- `CORS Configuration`, `async-handler.js`, centralized Error & Response Handling.
- Using and Configuring `ESLint` and `Prettier`.
- Testing APIs using `Postman` collections and automated test scripts.
- Using `dotenv`, `cross-env` for environment management.
- Understanding `12-Factor App` methodology.

### 13. Authentication and Authorization 🪪

- Difference Between Authentication & Authorization.
- Working with `Passwords` — hashing with `bcrypt`, salting, pepper.
- Session-based Authentication vs Token-based Authentication.
- Implementing `JWT` Authentication — `jsonwebtoken`, `JWT_SECRET`, `access tokens`, `refresh tokens`.
- Cookie Authentication — `httpOnly`, `secure`, `sameSite` flags.
- Role-Based Access Control (`RBAC`).
- Attribute-Based Access Control (`ABAC`) overview.
- Authenticating users with Express middleware.
- Understanding `Passport.js` — `passport-local`, `google-OAuth`, `github-OAuth`.
- `express-session` and using Passport for authentication.
- OAuth 2.0 flow explained — authorization code, PKCE.
- Implementing password reset flow with email tokens.
- Two-Factor Authentication (2FA) overview.
- Security best practices — token expiry, token rotation, storing tokens safely.

### 14. Real-Time Communication — WebSockets and Socket.io 💬

- Understanding `WebSockets` protocol for real-time applications.
- Learning `handshake`, `Persistent connection`, `Bidirectional communication`, `HTTP polling`.
- Difference between WebSocket and `Socket.io`.
- Working with `socket.io` — emitting and listening to events.
- Understanding `Rooms` and `Namespaces` in Socket.io.
- Broadcasting — `socket.emit`, `socket.broadcast.emit`, `io.to(room).emit`.
- Understanding `Middleware` in Socket.io — authentication over WebSockets.
- Handling reconnection and connection state.
- Scaling WebSocket servers with `socket.io-redis` adapter.
- Real-time features — live chat, notifications, collaborative editing.

### 15. Caching — Local and Redis 🍄

- What is Caching and how to cache data locally.
- What is `Redis` — data structures, persistence.
- Why use Redis for `Caching` — reducing DB load, improving response time.
- Implementing `Redis Caching` in `Node.js` with `ioredis`.
- Cache invalidation strategies — TTL, manual, cache-aside, write-through.
- Advanced Redis Features — `TTL`, `Complex Data Structures` (Lists, Hashes, Sorted Sets), `Pub/Sub`.
- Redis as a session store.
- Using `Bull` or `BullMQ` for background job queues with Redis.
- Cache stampede problem and prevention.

### 16. Error Handling in Express 🛑

- Basic Error Handling — `next(err)`.
- Catching Specific Errors — `try-catch`.
- Creating a centralized Error Handler middleware.
- Building custom `AppError` and `ApiError` classes.
- Distinguishing operational errors vs programmer errors.
- Graceful shutdown — handling `SIGTERM` and `SIGINT`.
- Using `express-async-errors` or wrapping async routes safely.

### 17. Testing 🛠️

- Understanding Unit Testing with `Jest` — `describe`, `it`, `expect`, mocking.
- Integration Testing — testing routes with `Supertest`.
- End-to-End (E2E) Testing overview with `Playwright` or `Cypress`.
- Test-Driven Development (TDD) workflow.
- Mocking database calls — in-memory databases, `mongodb-memory-server`.
- Code coverage reports — what is coverage and how to interpret it.
- Cross-Browser Testing — `BrowserStack`, `Playwright` multi-browser.
- Testing best practices — AAA pattern (Arrange, Act, Assert), test isolation.
- CI integration — running tests automatically on every push.

---

# Episode 5 - Merge

### 1. Generative AI and Applications 🤖

- Overview of `Generative AI` — LLMs, tokens, context windows, temperature.
- Prompt Engineering — system prompts, few-shot examples, chain-of-thought.
- Using OpenAI and `Gemini` APIs in Node.js applications.
- Building an AI-powered feature — streaming responses with SSE.
- Introduction to `LangChain` / `LangGraph` — chains, agents, memory, tools.
- Building a `RAG` (Retrieval-Augmented Generation) pipeline — embeddings, vector stores.
- Using vector databases — `Pinecone`, `Weaviate`, `pgvector`.
- Developing real-world applications — `AI Resume Reviewer`, `Virtual Interview Assistant`.
- `Agentic AI` applications — planning, tool use, multi-step reasoning.
- Working with `multi-agent systems`.
- `MCP` (Model Context Protocol) server — building and consuming MCP tools.
- AI safety and responsible AI — hallucinations, bias, guardrails.

### 2. Progressive Web App (PWA) Development 🛜

- Overview of Progressive Web Apps and their benefits.
- Understanding `Service Workers` — lifecycle, registration, scope.
- Lifecycle of a Service Worker — `Install`, `Activate`, `Fetch`.
- Caching strategies — `Cache First`, `Network First`, `Stale While Revalidate`.
- Understanding the `Web App Manifest` file.
- Creating `manifest.json` — `name`, `short_name`, `icons`, `start_url`, `display`, `theme_color`, `background_color`.
- Push Notifications with the `Push API` and `Notification API`.
- Background Sync for offline-first experiences.
- `IndexedDB` for offline data storage.
- Browser DevTools for PWA Debugging — Application tab, Lighthouse audit.
- Implementing `Lazy Loading` and `Code Splitting`.
- Testing PWAs on real devices and emulators.
- Publishing a PWA — installability checklist.

### 3. DevOps Fundamentals - Docker 🐳

- Understanding `DevOps` and its importance.
- Continuous Integration and Continuous Deployment (`CI/CD`) pipelines — GitHub Actions deep dive.
- Introduction to `Docker` — containers vs VMs, images, layers.
- Writing a `Dockerfile` — `FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, `CMD`.
- Building and running Docker images — `docker build`, `docker run`, `docker ps`.
- `Docker Compose` — orchestrating multi-container apps (app + DB + Redis).
- Docker volumes and networking.
- Docker Hub — pushing and pulling images.
- Introduction to `Kubernetes` — pods, services, deployments overview.
- Container security best practices.

### 4. Microservices with Node.js 🏘️

- What are `Microservices`? Why use them?
- `Monolithic` vs `Microservices` Architecture — trade-offs.
- `Challenges` of Microservices — distributed systems complexity, data consistency.
- Creating a `Node.js` Microservice — each service owns its database.
- Designing a Microservice Architecture for a sample application.
- `Inter-Service Communication` — synchronous vs asynchronous.
- Communication Patterns — `REST`, `gRPC`, `Message Queues`.
- Role of an `API Gateway` — routing, auth, rate limiting, load balancing.
- Setting Up an API Gateway with `Express.js` or `Kong`.
- `Service Discovery` — how services find each other.
- Understanding `Message Brokers` — Redis `Pub/Sub`, `RabbitMQ`, `Kafka`.
- `Event-Driven` Architecture — event sourcing, CQRS overview.
- Distributed tracing — `OpenTelemetry`, `Jaeger`.
- Using Docker and Kubernetes for microservice deployment.

### 5. Next.js 🔼

- Next.js Fundamentals — why Next.js over plain React.
- File-based Routing — App Router (`app/`) vs Pages Router (`pages/`).
- Static Assets and Image optimization with `next/image`.
- Dynamic Routes — `[id].js`, `[...slug]`.
- Rendering Strategies — `SSR` (Server-Side Rendering), `SSG` (Static Site Generation), `ISR` (Incremental Static Regeneration), `CSR` (Client-Side Rendering).
- React Server Components (RSC) — server vs client components.
- Data Fetching in the App Router — `fetch` with caching, `revalidate`.
- `Server Actions` — mutations without API routes.
- Route Handlers — building API endpoints in Next.js.
- Middleware in Next.js — auth guards, redirects.
- Styling in Next.js — Tailwind CSS, CSS Modules.
- Deployment on `Vercel` — environment variables, preview deployments.
- Metadata API for SEO.
- Next.js with authentication — `NextAuth.js` / `Auth.js`.

### 6. Web3 Basics ₿

- Understanding the concept and potential of `Web3`.
- Fundamentals of `Blockchain` technology — blocks, hashing, consensus mechanisms (PoW vs PoS).
- Wallets — `MetaMask`, public/private keys, seed phrases.
- Exploring Decentralized Applications (`DApps`).
- Introduction to `Smart Contracts` — how they work, Solidity basics.
- `Ethereum` ecosystem overview — EVM, gas, transaction lifecycle.
- Overview of `Cryptocurrencies`, `NFTs`, and `DeFi`.
- Using `ethers.js` or `viem` to interact with smart contracts from a frontend.
- Overview of `IPFS` for decentralized storage.
- Testing Smart Contracts with `Hardhat`.

### 7. Deployment ✈️

- Preparing the app for production.
- Easy and Smart Deployment — `DigitalOcean App Platform`, `Railway`, `Render`.
- Cloud providers overview — `AWS`, `GCP`, `Azure`, `Heroku`.
- Launching a VM with `AWS EC2`.
- Connecting via `SSH` — key pairs, security groups.
- Setting up the server — Node.js, PM2, env variables.
- Cloning and running the repository on the server.
- Configuring `NGINX` as a reverse proxy.
- Setting up SSL with `Let's Encrypt` + `Certbot`.
- Pointing a Domain to the server — DNS A records, TTL.
- Zero-downtime deploys with PM2 cluster mode.
- Monitoring and alerting — `UptimeRobot`, `AWS CloudWatch` overview.

---

# DSA with JavaScript

### 1. Conditional Statements

- Understanding Conditional Statements.
- Types — `if`, `if-else`, `if-else if`, `switch`, ternary.
- Guard clauses for early returns.
- Making decisions based on inputs, state, or variables.
- Validating user data.
- Creating interactive menus.
- Short-circuit evaluation in conditions.

### 2. Loops, Nested Loops, Pattern Programming

- Understanding Loops.
- `for` loop, `while` loop, `do-while` loop.
- Nested Loops and their time complexity implications.
- Pattern Programming — `Pyramid`, `right-angled triangles`, `inverted triangles`, `diamond patterns`, `number patterns`.
- `break` and `continue` — control flow.
- Avoiding infinite loops — correct termination conditions.
- Optimizing nested loops for performance.
- Loop unrolling concept.

### 3. Array

- Understanding Arrays.
- Basic Manipulations — `insertion`, `deletion`, `updation`.
- Accessing and Traversing Elements.
- Array Algorithms — `Two Pointer`, `Sliding Window`, `Prefix Sum`, `Kadane's Algorithm`, `Rotation Algorithms`, `Dutch National Flag`.
- In-place vs out-of-place algorithms.
- Subarray problems — maximum subarray, subarray with given sum.

### 4. Object-Oriented Programming (OOP) in JavaScript

- Understanding OOP — four pillars: Encapsulation, Abstraction, Inheritance, Polymorphism.
- Defining `class` for creating objects.
- Instantiating `objects` from a class.
- `constructor()` function.
- `this` keyword — context and binding.
- Inheritance with `extends` and `super`.
- Method Overriding (Polymorphism).
- Abstract classes simulation in JavaScript.
- Static methods and properties.
- Private fields with `#`.
- Interface simulation using duck typing.

### 5. Strings in JavaScript

- Understanding Strings.
- String Manipulation Methods — `concat()`, `slice()`, `substring()`, `replace()`, `replaceAll()`.
- String Search and Check — `indexOf()`, `lastIndexOf()`, `includes()`, `startsWith()`, `endsWith()`.
- String Transformations — `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`, `padStart()`, `padEnd()`.
- String Splitting and Joining — `split()`, `join()`.
- Template Literals and tagged templates.
- Escape Characters — `\n`, `\t`, `\'`, `\\`.
- Regular Expressions with strings — `match()`, `matchAll()`, `search()`, `replaceAll()` with regex.
- Algorithms — `Reverse a String`, `Palindrome Check`, `Longest Common Prefix`, `Character Frequency`, `Anagram Check`, `Longest Substring Without Repeating Characters`, `Roman Numeral Conversion`.

### 6. Time and Space Complexity

- Understanding Time Complexity and why it matters.
- `Big-O` Notation — definition and intuition.
- `O(1)` — Constant Time.
- `O(log n)` — Logarithmic Time.
- `O(n)` — Linear Time.
- `O(n log n)` — Linearithmic Time.
- `O(n²)` — Quadratic Time.
- `O(2ⁿ)` — Exponential Time.
- `O(n!)` — Factorial Time.
- Space Complexity — auxiliary space vs input space.
- Amortized Analysis — e.g., dynamic array resizing.
- Best case, Worst case, Average case analysis.
- Tips to Reduce Complexity — avoid nested loops, efficient data structures, memoization, divide and conquer.
- Understanding Recursion and the call stack.

### 7. Math Problems and Algorithms

- Mathematical Operations — `pow()`, `sqrt()`, `Math.abs()`, `Math.ceil()`, `Math.floor()`, `Math.round()`.
- GCD/HCF using Euclidean Algorithm.
- LCM from GCD.
- Prime Numbers — Sieve of Eratosthenes.
- Modular Arithmetic — useful in competitive programming.
- Fast Power (Binary Exponentiation).
- Number theory basics — factors, multiples, divisibility.
- Fibonacci — iterative, recursive, memoized, matrix exponentiation.

### 8. Advanced Problems on Array

- Two-pointer approach — pair sum, three sum, container with most water.
- Sliding Window — maximum sum subarray of size k, longest substring.
- Prefix Sums — range sum queries.
- Multi-Dimensional Arrays (2D, 3D).
- Key Operations on Multi-Dimensional Arrays — traversal, diagonal, spiral.
- Algorithms Using 2D Arrays — rotating a matrix, searching in a sorted matrix.
- Interval problems — merge intervals, meeting rooms.

### 9. Sorting Algorithms

- `Bubble Sort` — O(n²), adaptive.
- `Selection Sort` — O(n²), in-place.
- `Insertion Sort` — O(n²) worst case, O(n) best case.
- `Merge Sort` — O(n log n), stable, divide and conquer.
- `Quick Sort` — O(n log n) average, pivot strategies.
- `Cyclic Sort` — O(n) for numbered arrays.
- `Heap Sort` — O(n log n), in-place.
- `Counting Sort` / `Radix Sort` — O(n) for specific inputs.
- Understanding stability in sorting.
- Time and Space complexity comparison of all sorts.

### 10. Binary Search and Its Algorithms

- Binary Search on Sorted Arrays — iterative and recursive.
- Variations — first/last occurrence, count occurrences.
- Binary Search on Infinite Arrays.
- Binary Search in Rotated Sorted Array.
- Binary Search on 2D Matrix.
- Binary Search on Answer — `find minimum in rotated`, `square root`, `capacity to ship packages`.
- Real-World Use Cases.

### 11. Hashing (Set and Map) in JavaScript

- Understanding Hashing — hash functions, collision resolution.
- Working with `Set` — `add`, `delete`, `has`, `clear`, `size`, iteration.
- Working with `Map` — `set`, `get`, `delete`, `has`, `clear`, `size`, iteration.
- `WeakMap` and `WeakSet` for memory-friendly lookups.
- Algorithms Using `Set` & `Map` — two-sum, subarray with zero sum, longest consecutive sequence, group anagrams.
- Understanding frequency maps for string/array problems.

### 12. Linked List in JavaScript

- Understanding Linked List — `Data`, `Pointer`.
- `Singly Linked List` — implementation from scratch.
- `Doubly Linked List` — forward and backward pointers.
- `Circular Linked List`.
- Node creation, building, and traversal.
- Operations — `Insertion` (at head, tail, position), `Deletion`, `Searching`, `Reversal`.
- Algorithms — detecting a cycle (Floyd's algorithm), finding middle node, merging two sorted lists, intersection point, palindrome check.
- `LRU Cache` implementation using LinkedList + HashMap.

### 13. Queue in JavaScript

- Implementation of Queue by Linked List and Array.
- `Basic Queue`, `Circular Queue`, `Deque (Double Ended Queue)`.
- Operations — `Enqueue`, `Dequeue`, `Peek`, `IsEmpty`, `Size`.
- `Priority Queue` — concept and implementation using a heap.
- Algorithms Using Queues — BFS, sliding window maximum.
- Applications — task scheduling, print spooling, BFS traversal.

### 14. Stack in JavaScript

- Understanding Stacks.
- Implementation by Linked List and Array.
- Operations — `Push`, `Pop`, `Peek`, `IsEmpty`, `Size`.
- Algorithms Using Stacks — balanced parentheses, next greater element, stock span, `min stack`, `monotonic stack`.
- Applications — undo/redo, function call stack, expression evaluation.

### 15. Advanced Problems on Recursion and Backtracking

- Understanding Advanced Recursion — recursion tree, stack frames.
- Backtracking framework — choose, explore, unchoose.
- Problems — `N-Queens`, `Sudoku Solver`, `Subset Sum`, `Word Search`, `Rat in a Maze`, `Permutations`, `Combinations`.
- Memoization to optimize recursive solutions.
- Challenges — overlapping subproblems, exponential branches.
- Introduction to Dynamic Programming from recursion.

### 16. Tree

- Understanding Binary Trees.
- Types — `Full`, `Complete`, `Perfect`, `Balanced`, `Degenerate` Binary Trees.
- Key Terminology — `Node`, `Root`, `Leaf`, `Height`, `Depth`, `Level`.
- Binary Tree Operations — `Insertion`, `Deletion`, `Traversal` (Inorder, Preorder, Postorder, Level Order), `Searching`.
- Binary Tree Algorithms — `Height`, `Diameter`, `LCA (Lowest Common Ancestor)`, `Symmetry Check`, `Path Sum`, `Zigzag Traversal`, `Views` (left, right, top, bottom).
- Serialization and Deserialization of Binary Trees.
- Applications — expression trees, file systems, DOM.

### 17. Binary Search Tree (BST)

- Understanding BST — the invariant property.
- Properties — inorder traversal gives sorted output.
- BST Operations — `Insertion`, `Deletion`, `Search`, `Find Min/Max`, `Successor/Predecessor`.
- BST Algorithms — validate a BST, kth smallest/largest, convert sorted array to BST.
- Balanced BSTs — `AVL Tree`, `Red-Black Tree` (conceptual understanding).
- Applications — sorted data storage, range queries, databases.
- Advantages and limitations of BST.

### 18. Heap / Priority Queue

- What is a Heap — Min Heap, Max Heap.
- Heap operations — `insert`, `extractMin/Max`, `heapify`, `peek`.
- Implementing a Heap in JavaScript.
- Using a Heap for — Kth largest/smallest, merge K sorted lists, top K frequent elements.
- `Heap Sort`.
- JavaScript's lack of built-in priority queue — implementing one.

### 19. Graph

- What is a Graph — directed, undirected, weighted, unweighted.
- Representations — Adjacency Matrix, Adjacency List.
- Graph Traversal — `BFS` (Breadth-First Search), `DFS` (Depth-First Search).
- Cycle Detection — in directed and undirected graphs.
- Topological Sort — Kahn's algorithm, DFS-based.
- Shortest Path — `Dijkstra's Algorithm`, `Bellman-Ford`.
- Minimum Spanning Tree — `Kruskal's`, `Prim's` algorithms.
- Disjoint Set Union (DSU) / Union-Find.
- Applications — social networks, maps, dependency resolution.

### 20. Dynamic Programming

- What is DP — overlapping subproblems + optimal substructure.
- Top-Down (Memoization) vs Bottom-Up (Tabulation).
- Classic DP problems — `Fibonacci`, `Climbing Stairs`, `0/1 Knapsack`, `Longest Common Subsequence`, `Longest Increasing Subsequence`, `Coin Change`, `Edit Distance`, `Matrix Chain Multiplication`.
- 2D DP problems — grid paths, unique paths.
- DP on strings — palindromic substrings, longest palindromic subsequence.
- Space optimization in DP.

---

# Aptitude and Reasoning

### Classic Chapters

### 1. Percentage

- Learn `tips and tricks` for percentages.
- Solve `basic`, `medium`, and `advanced` questions.
- Percentage change, percentage of a percentage.
- Applications — profit/loss, discount, tax, interest.
- Practice `MCQs` to master percentages.

### 2. Profit and Loss

- Concepts of Profit and Loss.
- Relationship between `cost price`, `selling price`, and `mark-up price`.
- Successive discounts, dishonest dealers, false weights.
- Solve practical scenarios involving `discounts`, `successive transactions`.
- Practice `MCQs`.

### 3. Simple Interest

- Master the formula for Simple Interest.
- Differentiate between `principal`, `interest rate`, and `time period`.
- Solve `case-based problems` on borrowing and lending.
- Practice `MCQs`.

### 4. Compound Interest

- Understand the growth of investments and savings.
- Differentiate between `simple interest` and `compound interest`.
- Solve problems with `annual`, `semi-annual`, and `quarterly` compounding.
- Population growth and depreciation problems.
- Practice `MCQs`.

### 5. Ratio and Proportion

- Basics of `ratios` and equivalent ratios.
- Solve problems on `proportional relationships`, `direct proportion`, `inverse proportion`.
- Mixture and Alligation — combining two groups.
- Practice `MCQs`.

---

### Number Related Topics

### 1. Number System

- Classification — `natural numbers`, `whole numbers`, `integers`, `rational numbers`, `irrational numbers`, `real numbers`.
- `Divisibility rules` for 2, 3, 4, 5, 6, 7, 8, 9, 11.
- Factors, multiples, prime factorization, place value.
- Remainder theorem and cyclicity of remainders.
- Unit digit calculations.
- Practice `MCQs`.

### 2. HCF and LCM

- Techniques to find `HCF` and `LCM` — prime factorization, Euclidean algorithm.
- Applications in `scheduling` and `resource sharing`.
- Word problems involving `time`, `distance`, and `recurring patterns`.
- HCF and LCM of fractions.
- Practice `MCQs`.

### 3. Average

- Understanding `averages` and weighted averages.
- Problems on `missing numbers`, and `group data`.
- Average speed problems.
- Replacing one member — effect on average.
- Practice `MCQs`.

---

### Speed, Work and Time Related Topics

### 1. Work and Time

- Relationship between `work`, `time`, and `efficiency`.
- Individuals or groups working together — combined work formula.
- Alternate work schedules, work completion rates.
- Pipes and Cisterns — analogy to work.
- Practice `MCQs`.

### 2. Pipes and Cisterns

- Understand the analogy between `pipes` and `work-time`.
- Solve problems with `multiple pipes` working together or alternately.
- Leakage problems — inlet vs outlet.
- Practice `MCQs`.

### 3. Speed, Distance, and Time

- Master the formula: `Speed = Distance / Time`.
- `Relative speed` — same direction, opposite direction.
- Average speed problems — harmonic mean.
- Circular track problems.
- Practice `MCQs`.

### 4. Problems on Trains

- Train crossing a pole, platform, another train.
- `Relative speed` in train problems.
- Problems with trains of different lengths and speeds.
- Practice `MCQs`.

### 5. Boats and Streams

- Upstream, downstream — effective speed formulas.
- Still water speed and stream speed calculations.
- Time to and fro problems.
- Practice `MCQs`.

---

### Probability and Combinations

### 1. Permutations and Combinations

- `Permutations` (arrangement) vs `Combinations` (selection).
- Formulas — `nPr`, `nCr`, factorials.
- Circular permutations, arrangements with repetition.
- Selections with conditions — at least, at most.
- Practice `MCQs`.

### 2. Probability

- `Probability` fundamentals — sample space, events.
- Classical, empirical, axiomatic probability.
- `Conditional probability`, `Bayes' theorem` basics.
- Mutually exclusive and independent events.
- Practice `MCQs`.

---

### Progressions

### 1. Arithmetic Progression (AP)

- Understanding AP with constant common difference.
- Formulas — general term `aₙ` and sum `Sₙ`.
- Real-life applications of AP.
- Problems on `missing terms`, `specific terms`, `sum of series`.
- Practice `MCQs`.

### 2. Geometric Progression (GP)

- Understanding GP with constant common ratio.
- Formulas — general term and sum (finite and infinite GP).
- Applications — compound interest, population models.
- Problems on `missing terms`, `specific terms`.
- Practice `MCQs`.

---

### Miscellaneous Topics

### 1. Calendar

- `Days`, `months`, `leap years`, `century years` rules.
- `Odd Days` concept and calculation.
- Finding the day for any given date.
- Repeating calendar years.
- Practice `MCQs`.

### 2. Clocks

- Clock structure — minute and hour hand movements.
- Angle between hands formula.
- Overlaps, right angles, straight line positions.
- Clock puzzles and defective clocks.
- Practice `MCQs`.

### 3. Ages

- Problems on present, past, and future ages.
- Ratio-based age problems.
- Practice `MCQs`.

### 4. Mensuration

- 2D shapes — area and perimeter of triangle, square, rectangle, circle, trapezium, rhombus.
- 3D shapes — volume and surface area of cube, cuboid, cylinder, cone, sphere.
- Practice `MCQs`.

---

# Logical Reasoning

### 1. Direction Sense

- Understanding directions (N, S, E, W, NE, NW, SE, SW) and final direction.
- Tracking movements and turns.
- Shadow and distance problems.
- Practice `MCQs`.

### 2. Blood Relations

- Relationships — `father`, `mother`, `brother`, `sister`, `uncle`, `aunt`, `cousin`.
- Family trees and complex relationships.
- Coded blood relation problems.
- Practice `MCQs`.

### 3. Syllogism

- Logical reasoning and conclusion deduction.
- Breaking down `premises` to check conclusions.
- `All`, `Some`, `No`, `Only` premises.
- Venn diagram approach to syllogisms.
- Practice `MCQs`.

### 4. Arrangements (Seating Arrangement)

- Linear and circular arrangements.
- Applying `constraints` — facing, adjacent, not adjacent.
- Floor-based puzzles.
- Practice `MCQs`.

### 5. Series (Number & Letter Series)

- Number sequences — arithmetic, geometric, mixed.
- Letter series, alphanumeric series.
- Missing number in a series.
- Practice `MCQs`.

### 6. Coding-Decoding

- Letter shifting codes.
- Word-based coding.
- Number-based coding.
- Mixed coding patterns.
- Practice `MCQs`.

### 7. Puzzles

- Einstein-style logic puzzles.
- Tabular puzzles — who lives where, who owns what.
- Practice `MCQs`.

### 8. Data Sufficiency

- Determining if given statements are sufficient to answer a question.
- Practice `MCQs`.

---

# Verbal Reasoning

### 1. Sentence Ordering (Para Jumbles)

- Identifying opening and closing sentences.
- Finding logical links between sentences.
- Practice `MCQs`.

### 2. Error Identification

- Grammatical errors — subject-verb agreement, tense, articles.
- Punctuation errors.
- Practice `MCQs`.

### 3. Sentence Improvement

- Replacing the underlined part with a better option.
- Vocabulary and grammar-based improvements.
- Practice `MCQs`.

### 4. Reading Comprehension

- Understanding passages and answering inference-based questions.
- Identifying the main idea, author's tone, and implied meanings.
- Practice `MCQs`.

### 5. Fill in the Blanks

- Single and double blank questions.
- Vocabulary — synonyms, antonyms, contextual meaning.
- Practice `MCQs`.

### 6. Vocabulary

- Synonyms and Antonyms.
- Idioms and Phrases.
- One-word substitutions.
- Commonly confused words.
- Practice `MCQs`.




---

To Learn Each Topic
- Use Claude AI Tool
- Prompt
```
Act as a highly experienced programming teacher who explains concepts in Hinglish (Hindi + English mix) in a very clear, beginner-friendly, and structured way.

Your teaching style should feel like a real mentor, not a textbook.

For every topic I give you, follow this exact structure:

1. Simple Explanation (ELI5)
- Explain the concept like I am a complete beginner.
- Use Hinglish.
- Avoid jargon or explain it clearly if used.

2. Real-World Analogy
- Give 1–2 real-life relatable examples so I can deeply understand the concept.

3. Core Concepts Breakdown
- Break the topic into small parts.
- Explain step-by-step with clarity.

4. Code Examples (if applicable)
- Show clean and simple examples.
- Explain each line in Hinglish.

5. Common Mistakes
- Tell me what beginners usually do wrong.

6. Mini Quiz 🧠
- Ask 3–5 questions to test my understanding.
- Mix conceptual + practical questions.

7. Hands-on Task (70% Building)
- Give me a small practical task/project based on this topic.

8. Project-Based Learning
- Suggest 1 real-world mini project using this concept.

9. External Resources 🌐
- Suggest 2–3 high-quality resources (articles, docs, videos) to explore more.

Rules:
- Keep tone engaging and slightly conversational.
- Use Hinglish naturally.
- Don’t overcomplicate things.
- Focus more on understanding than memorization.
- Encourage learning by building (70%) instead of just theory (30%).
  
Just give response teaching text, and dont give any web component.

Wait for my topic before starting.

```