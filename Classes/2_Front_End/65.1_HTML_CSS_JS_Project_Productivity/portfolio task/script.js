function left() {
  let logoImg = React.createElement('img', { src: './assets/logo.png' });
  let logoContainer = React.createElement('div', { class: 'logo' }, logoImg);

  let a1 = React.createElement('a', { href: '#' }, 'About Me');
  let li1 = React.createElement('li', null, a1);
  let a2 = React.createElement('a', { href: '#' }, 'Portfolio');
  let li2 = React.createElement('li', null, a2);
  let a3 = React.createElement('a', { href: '#' }, 'Services');
  let li3 = React.createElement('li', null, a3);
  let a4 = React.createElement('a', { href: '#' }, 'Blog');
  let li4 = React.createElement('li', null, a4);
  let navLinks = React.createElement('div', { class: 'nav-links' }, [li1, li2, li3, li4]);

  return React.createElement('div', { class: 'left' }, [logoContainer, navLinks]);
}

function right() {
  let a = React.createElement('a', { href: '#' }, 'Book A Call');
  let i = React.createElement('i', { class: 'ri-arrow-right-up-line' }, null);

  return React.createElement('div', { class: 'right' }, [a, i]);
}

function nav() {
  return React.createElement('nav', null, [left(), right()]);
}

function leftLineContainer() {
  let year = React.createElement('div', { class: 'year' }, '2025');
  let line = React.createElement('div', { class: 'line' }, null);
  let role = React.createElement('div', { class: 'role' }, 'Product designer');

  return React.createElement('div', { class: 'left-line-container' }, [year, line, role]);
}

function achievments() {
  let achNum1 = React.createElement('div', { class: 'ach-number' }, '+200');
  let achText1 = React.createElement('div', { class: 'ach-text' }, 'Project completed');
  let ach1 = React.createElement('div', { class: 'ach1' }, [achNum1, achText1]);

  let achNum2 = React.createElement('div', { class: 'ach-number' }, '+50');
  let achText2 = React.createElement('div', { class: 'ach-text' }, 'Startup raised');
  let ach2 = React.createElement('div', { class: 'ach2' }, [achNum2, achText2]);

  return React.createElement('div', { class: 'achievements' }, [ach1, ach2]);
}

function heroIntro() {
  let h1 = React.createElement('h1', null, 'Hello');
  let p = React.createElement('p', null, "- It's D.Nova a design wizerd");

  return React.createElement('div', { class: 'hero-intro' }, [h1, p]);
}

function scroll() {
  let span = React.createElement('span', null, 'Scroll down');
  let i = React.createElement('i', { class: 'ri-arrow-down-line' }, null);

  return React.createElement('div', { class: 'scroll' }, [span, i]);
}

let content = React.createElement('div', { class: 'content' }, [achievments(), heroIntro(), scroll()]);

let main = React.createElement('main', null, [leftLineContainer(), content]);

let userProfile = React.createElement('img', { src: './assets/1n1main-hero.png', id: 'user-profile' }, null);

let wrapper = React.createElement('div', { id: 'wrapper' }, [nav(), main, userProfile]);

let root = ReactDOM.createRoot(document.querySelector('.parent'));

root.render(wrapper);
