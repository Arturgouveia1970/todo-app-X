import React from 'react';
// import ReactDOM from 'react-dom';
import createRoot from 'react-dom/client';
import TodoContainer from './components/TodoContainer';

// ReactDOM.render(
//   <React.StrictMode>
//     <TodoContainer />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
