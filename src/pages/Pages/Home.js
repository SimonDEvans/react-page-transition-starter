import React, { Component } from 'react';
import Page from '../Page';

// Enable use of internal links
import { NavLink } from 'react-router-dom';

// Import a component
import ExampleComponent from 'components/ExampleComponent/ExampleComponent';

// Include an image
import exampleImage from 'images/example.jpg';

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      // Do something after 300ms (animate an element, etc)
    }, 300);
  }

  render() {
    return (
      <Page>
        <h1>Homepage</h1>

        {/* Use <NavLink> to link to internal pages */}
        <p>A link to the <NavLink to={{pathname: '/child-page'}} className="add-a-class-here">child page</NavLink></p>
        <p>A link to the <NavLink to={{pathname: '/child-page/grandchild-page'}} className="add-a-class-here">grandchild page</NavLink></p>

        {/* You can still use <a> for external links */}
        <p>A standard <a href="https://sii.im">external link</a></p>

        {/* Include React components with the following syntax. Make sure you've imported it! */}
        <p>Include a component:</p>
        <ExampleComponent />

        {/* You can import internal images with the following syntax */}
        <p>Include an internal image:</p>
        <img src={exampleImage} alt="example" />
      </Page>
    );
  }
}

export default Home;
