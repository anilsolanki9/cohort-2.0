import { createRoot } from 'react-dom/client';

//to import css
import './index.css';

// to import app function that returns component
import App from './App.jsx';
let root = createRoot(document.getElementById('root'));

root.render(<App />);
// or root.render(App())
