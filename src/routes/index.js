import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const Home = React.lazy(() => import('pages/IndexPage'));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
