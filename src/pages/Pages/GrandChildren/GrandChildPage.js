import React, { Component } from 'react';
import Page from '../../Page';

class GrandChildPage extends Component {
  render() {
    return (
      <Page>
        <h1>Grandchild page</h1>
        <p>Use grandchild pages when you want to nest content and retain the correct menu state for the parent page.</p>
        <p>Note that 'Child page' is still marked as active in the nav - we aren't on that page, but since we're a child <em>of</em> that page (at least according to the URL) we want the nav to display accordingly.</p>
      </Page>
    );
  }
}

export default GrandChildPage;
