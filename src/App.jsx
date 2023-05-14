import Users from './users/pages/Users.jsx'
import NewPlaces from './places/pages/NewPlaces.jsx'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'
import './App.css'

/**
 * The usage of exact ensures that the value would need to create an exact match, essentially matches for "/" exactly
 * 
 * A few more key things to undertsand, the usage of Switch and Redirect
 * 
 * Switch ensures that if the  browser dom finds something that can be perfectlhy internally settled, then the route is confirmed in place and doesn't
 * move down to the redirect tag
 * 
 * Redirect ensures that if a non existent route is entered, then we just redirect back to the base route, this base route is flexible and can be changed
 * 
 * 
 * @returns Nothing
 */
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Users/>
        </Route>
        <Route path="/places/new" exact={true}>
          <NewPlaces/>
        </Route>
        <Redirect to = "/"></Redirect>
      </Switch>
    </BrowserRouter>
  )
}

export default App
