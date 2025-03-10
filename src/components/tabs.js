import axios from "axios";

const Tabs = (topics) => {

  const card = document.createElement('div');
  card.classList.add('topics');

  topics.forEach(element => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = element;
    card.appendChild(tab);
  });

  return card;
  //console.log(card);
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {

  axios.get('http://localhost:5000/api/topics')
  .then(resp => {
    console.log('TABS RESPONSE-----------------------------');
    console.log(resp.data);
    console.log('-------------------------------------');

    const tabsCard = Tabs(resp.data.topics);
    const entryPoint = document.querySelector(selector);
    entryPoint.appendChild(tabsCard);
  })
  .catch(error => {
    console.error(error);
  })


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}
//tabsAppender('.hello');
// const subjects = ['asdf1', 'asdf2', 'asdf3', 'asdf4'];

// Tabs(subjects);
export { Tabs, tabsAppender }
