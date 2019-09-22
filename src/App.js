import React from 'react';

import List from './component/List/List';
import Header from './component/common/Header';
import Detail from './component/detail/Detail';
import NotFound from './component/NotFound/NotFound';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
              <Route exact path="/" component={List}/>
              <Route path="/currency/:id" component={Detail} />
              <Route component = {NotFound} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
