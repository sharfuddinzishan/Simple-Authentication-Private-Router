import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './container/Header/Header';
import Home from './container/Home/Home';
import Register from './container/Register/Register';
import Shopping from './container/Shopping/Shopping';
import Login from './container/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Review from './container/Review/Review';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/shopping">
            <Shopping></Shopping>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          {/* <Route exact path="/review" component={Review} /> */}
          {/* <Route exact path="/shopping" component={Shopping} /> */}
          {/* <PrivateRoute exact path="/shopping" component={Shopping} /> */}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
