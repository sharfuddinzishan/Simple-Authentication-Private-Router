import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './container/Header/Header';
import Home from './container/Home/Home';
import Register from './container/Register/Register';
import Shopping from './container/Shopping/Shopping';
import Login from './container/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/shopping" component={Shopping} /> */}
          {/* <PrivateRoute exact path="/shopping" component={Shopping} /> */}
          <PrivateRoute>
            <Shopping></Shopping>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
