import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop';
import DefaultLayout from 'layouts/DefaultLayout';
import './styles/Main.scss';

const supportsHistory = 'pushState' in window.history;

const App = () => (
  <BrowserRouter forceRefresh={!supportsHistory}>
    <ScrollToTop>
      <DefaultLayout />
    </ScrollToTop>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
