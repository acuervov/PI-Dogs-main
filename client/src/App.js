import './App.css';
import Home from './components/Home'
import Form from './components/Form'
import Random from './components/Random'
import Landing from './components/Landing'
import Search from './components/Search'
import Detail from './components/Detail';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route
        exact path = '/'
        render = {()=> <Landing/>}
     />
     <Route
        path = '/home/:id?' //¿funciona sin el "?"?
        render = {()=> <Home/>}
     />
     <Route
        path = '/form'
        render = {()=> <Form/>}
     />
     <Route
        path = '/random'
        render = {()=> <Random/>}
     />
     <Route
        path = '/search'
        render = {()=> <Search/>}
     />
     <Route
        path = '/Dog/:id'
        render = {()=> <Detail/>}
     />
    </div>
  );
}

export default App;
