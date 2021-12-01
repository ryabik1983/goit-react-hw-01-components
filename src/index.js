import React, { Children } from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// React.createElement('span', {children: 'Hello'});
// const user = {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }

// const elem1 = <span>Hello</span>;
// // React.createElement('span', {children: 'world!'})
// const elem2 = <span>world</span>;

// // const element = React.createElement('div', {a:5, b:10, children: [elem1, ' ', elem2]});
// const jsxElement = <div>
//   {elem1}
//   {elem2}
//   </div>
// console.log(jsxElement);

// ReactDOM.render(<Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>,
//    document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
