const titleInp = document.getElementById('title');
const imgUrl = document.getElementById('imgUrl');
const columnNum = document.getElementById('columnNum');
const addBtn = document.getElementById('addBtn');
const col1 = document.getElementById('column1');
const col2 = document.getElementById('column2');
const col3 = document.getElementById('column3');
const col4 = document.getElementById('column4');

addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  let title = titleInp.value;
  let source = imgUrl.value;
  let columnNumber = +columnNum.value;
  if (!title.trim || !source.trim) {
    alert('Please enter valid Title, URL and Column value');
  } else if (isNaN(columnNumber) || columnNumber < 1 || columnNumber > 4) {
    alert('Invalid Column Value');
  } else {
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', source);
    let p = document.createElement('p');
    p.classList.add('imgTitle');
    p.textContent = title;

    div.appendChild(img);
    div.appendChild(p);
    switch (columnNumber) {
      case 1:
        col1.appendChild(div);
        break;
      case 2:
        col2.appendChild(div);
        break;
      case 3:
        col3.appendChild(div);
        break;
      case 4:
        col4.appendChild(div);
        break;
      default:
    }
  }
  titleInp.value = '';
  imgUrl.value = '';
  columnNum.value = '';
});
