# What is CSS

- CSS => Cascading Style Sheet
- Used to Style Websites
- Cascading means, the styles rules are applied in an order, in case of conflicting styles, the one with higher priority get selected.

# Why we use CSS

- To Make website beautifull.
- To control website layout.
- Save Time (External CSS stylesheet can be appied to multiple HTML pages).
- Responsive Website
- Better UI & UX

# Types of CSS

- Inline (Quick , easy, but messy in big projects)
  - Goes in the elements opening tag, Use `style` attribute.

```html
<p style="color: red; background-color: yellow;">I Like you</p>
```

- Internal (Usefull for single-page projects, can't be used for multiple pages)
  - Goes inside `<head></head>` tag. Use `<style></style>` element

```html
<head>
  <style>
    h1 {
      color: blue;
      text-align: center;
    }
  </style>
</head>
```

- External (Best, clean, Good seperation of concerns)
  - Goes into `<head></head>` tag, uses `<link>` tag to link to external CSS

```html
<link rel="stylesheet" href="styles.css" />
```

```css
p {
  color: green;
  font-size: 18px;
}
```

# Selectors In CSS

```css
/* Element / Tag Seector */
p {
  color: red;
  font-size: 20px;
}

/* Universal Selector */
* {
  margin: 0;
  padding: 0;
}

/* Class selector */
.highlight {
  color: green;
  font-weight: bold;
}

/* ID Selector */
#special {
  color: red;
}
```

- Classes => Used only if we want to give common styles to group of elements.
- Id => Used when we want to give unique style to an element.

# Custom fonts

- Google fonts, link and use
- Website -> Dev Tools -> Network Tab -> fonts (Reload) -> double click font -> ✔️
- Download font from `dafont` or `fontsquirrel` => use `@font-face` create costom font face instance and use it.

# Div

- Generic division container
- Group elements together
- Create shapes
