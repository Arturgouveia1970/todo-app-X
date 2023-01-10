import React from 'react';
import ReactDOM from 'react-dom';
// import createRoot from 'react-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <TodoContainer />
//   </React.StrictMode>,
// );
