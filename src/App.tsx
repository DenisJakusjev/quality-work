import React from 'react';
import router from "./router/router"
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {router.map((route, index) => {

         return  <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={() => (
              <div>
                <Header name={route.name}/>
                <route.component name={route.name} />
                <Footer />
              </div>
            )}
          >
          </Route>
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
