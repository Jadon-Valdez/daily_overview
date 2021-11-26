import React from  'react'
import './App.css';
import Landing from './components/Landing'
import NewTask from './components/NewTask';
import axios from 'axios'
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import CityForm from './components/CityForm';
import TaskBar from './views/TaskBar';
import NewsItem from './components/NewsItem'
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="all">
      <BrowserRouter>
          <Route exact path="/">
            <Landing />
            <CityForm />
            <NewTask />
            <TaskBar />
            <NewsList />
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;