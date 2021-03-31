import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import { App } from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle/>
      <App/>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);