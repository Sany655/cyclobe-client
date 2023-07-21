import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home/Home';
import Products from './components/Pages/Products/Products';
import Dashboard from './components/Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './context/AuthProvider';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import UserRoute from './PrivateRoutes/UserRoute';
import axios from 'axios';
import PlaceOrder from './components/Pages/PlaceOrder/PlaceOrder';

function App() {
  // axios.defaults.baseURL = 'https://intense-headland-66202.herokuapp.com/'
  axios.defaults.baseURL = 'https://cyclobe-server.onrender.com'
  // axios.defaults.baseURL = 'http://localhost:5000/'
  return (
    <AuthProvider>
      <BrowserRouter className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/registration'>
            <Register />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <UserRoute path='/dashboard'>
            <Dashboard />
          </UserRoute>
          <UserRoute path='/place-order/:id'>
            <PlaceOrder />
          </UserRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
