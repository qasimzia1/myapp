import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Introduction from './components/abc.js/introduction';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,Redirect
} from "react-router-dom";
import Child from './components/child';
import About1 from './pages/about1';
import Home from './pages/home';
import Contact from './pages/contact';
import Contactchild from './components/contactchild';
import Formp from './components/formp';




function App() {
  return (
    // hamesha router k ander he link or route likhna hy tab he routing ho gi. lakin hum diffrent  pages k ander link likh k routing karwa sakty han jab tak ham na router k ander routing karwai hoi ho  
    <div >

      
     <Router>
     
      <Link to="about"> about </Link>
      <Link to="home"> Home </Link>
      <Link to="about1"> info </Link>
      <Link to="/contact"> contact </Link>
      <Link to="/formp"> form </Link>
      <Switch>
       <Route exact path="/"> <About /> </Route>
       <Route path="/about1"> <About1></About1> </Route>
       <Route path="/formp"> <Formp/> </Route>
       <Route path="/home"><Home/> </Route>
       <Route path="/contact"><Contact/> </Route>
       <Route path="/contactchild"><Contactchild/> </Route>
       <Route path="/child"> <Child /> </Route>
       {/* <Route path="/"> </Route>
       <Route path="/"> </Route> */}
       <Redirect  to="/" /> 
       </Switch>
     </Router>
     
    </div>
    
  );
}

export default App;
