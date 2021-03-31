import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
        <App />
        <Source />
  </React.StrictMode>,
  document.getElementById('root')
);

function Source() {
  return (
    <div>
      <a href="https://github.com/pdkkid/markdown-preview" target="_blank" rel="noreferrer noopener" >Source</a>
    </div>
  );
}