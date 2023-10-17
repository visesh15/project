import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Products from './Products';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <Switch>
        <Route path="/" exact component={Products} />
        {/* Other routes for Login, Signup, Cart, ProductDetails, AddProduct, etc. */}
      </Switch>
    </Router>
  );
}
export default App;
