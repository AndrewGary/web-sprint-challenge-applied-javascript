const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const innerDate = document.createElement('span');
  const innerTitle = document.createElement('h1');
  const innerTemp = document.createElement('span');

  header.classList.add('header');
  innerDate.classList.add('date');
  innerTemp.classList.add('temp');

  header.appendChild(innerDate);
  header.appendChild(innerTitle);
  header.appendChild(innerTemp);



  innerDate.textContent = date;
  innerTitle.textContent = title;
  innerTemp.textContent = temp;

  return header;
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {

  let header = Header('December 3rd 2021', 'Andrew Gary', 'Content Content Content');
  let entryPoint = document.querySelector(selector);
  entryPoint.appendChild(header);
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
