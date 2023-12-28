import './App.css';
import AddSupplier from './components/AddSupplier';
import AllSupplier from './components/AllSupplier';
import UpdateSupplier from './components/UpdateSupplier';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddMaterial from './components/AddMaterial';
import AddInventory from './components/AddInventory';
import UpdateInventory from './components/UpdateInventory';
import UpdateMaterial from './components/UpdateMaterial';
import Header from './components/Header';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AllInventory from './components/AllInventory';
import AllMaterial from './components/AllMaterial';

import PDF from './components/PDF';

import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <NavBar/>
      <Route path="/home" exact component={Home}/>
      <Route path="/add" exact component={AddSupplier}/>
     <Route path="/updated/:id" exact component={UpdateMaterial}/>
      <Route path="/adding" exact component={AddInventory}/>
      <Route path="/allsup" exact component={AllSupplier}/>
      <Route path="/" exact component={AllInventory}/>
   <Route path="/updates/:id" exact component={UpdateSupplier}/>
      <Route path="/all" exact component={AllMaterial}/>
    <Route path="/added" exact component={AddMaterial}/>
      <Route path="/update/:id" exact component={UpdateInventory}/>
      
      <Route path="/print" exact component={PDF}/>
     
      <header className="App-header"/>
      <Footer/>


      
    
        
    

    </div>
    </Router>
   
  );
}

export default App;
