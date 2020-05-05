import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './components/Index';
import NotFound from './components/NotFound';
import List from './components/List';
import Form from './components/Form';
import Navigation from './components/Navigation';
import Details from './components/Details';
import UpdateForm from './components/UpdateForm';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <div className="MainContent">
          <Switch>
            <Route path='/' exact component={Index} />
            <Route path='/topics' exact component={List} />
            <Route exact path='/topics/:id' component={Details} />
            <Route path='/form' component={Form} />
            <Route path='/topics/:id/updateform' component={UpdateForm} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
