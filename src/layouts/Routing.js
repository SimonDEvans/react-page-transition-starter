import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Home,
  ChildPage,
  GrandchildPage,
  Error404
} from 'pages/exports';

class Routing extends Component {
  render() {
    return (
      <Route
        render={({location}) => {
          const {pathname} = location;
          return (
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                classNames="page"
                timeout={300}
              >
                <Route location={location}
                  render={() => (

                    // Add more routes as you need them, but make
                    // sure you add them to `exports.js` and import
                    // them above

                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/child-page" component={ChildPage} />
                      <Route path="/child-page/grandchild-page" component={GrandchildPage} />
                      <Route component={Error404} />
                    </Switch>
                  )}
                />

              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />
    );
  }
}

export default Routing;

