import './App.css';
import Home from './components/Home'
import Form from './components/Form'
import Perrito from './components/Perrito'
import Random from './components/Random'
import Landing from './components/Landing'
import Search from './components/Search'
import Cards from './components/Cards';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route
        exact path = '/'
        render = {()=> <Landing/>}
     />
     <Route
        path = '/home'
        render = {()=> <Home/>}
     />
     <Route
        path = '/form'
        render = {()=> <Form/>}
     />
     <Route
        path = '/perrito/:id'
        render = {()=> <Perrito/>}
     />
     <Route
        path = '/random'
        render = {()=> <Random/>}
     />
     <Route
        path = '/search'
        render = {()=> <Search/>}
     />
    </div>
  );
}

export default App;
