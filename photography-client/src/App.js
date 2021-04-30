import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './component/Login/Login';
import Home from './component/Home/Home/Home';
import Header from './component/Home/Header/Header';
import NoMatch from './component/NoMatch/NoMatch';
import Dashboard from './component/Dashboard/Dshboard/Dashboard';
import ServiceDetails from './component/Home/ServiceDetails/ServiceDetails';
import AddService from './component/Dashboard/AddService/AddService';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import BookingList from './component/Dashboard/BookingList/BookingList';
import Review from './component/Dashboard/Dshboard/Review/Review';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log('data is ', loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <PrivateRoute path="/service/book">
            <ServiceDetails />
          </PrivateRoute>
          <PrivateRoute path="/book/booklist">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/book/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/details/:id">
            <ServiceDetails />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
