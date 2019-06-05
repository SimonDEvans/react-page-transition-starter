import React from 'react';
import { withRouter } from 'react-router-dom';
import './Page.scss';

function Page({children}) {
  return (
    <div className="page">
      {children}
    </div>
  );
}

export default withRouter(Page);
