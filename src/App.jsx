import Users from './users/pages/Users.jsx'
import NewPlaces from './places/pages/NewPlaces.jsx'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'

import MainNavigation from './shared/components/Navigation/MainNavigation.jsx'
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
 * The Usage of <main> allows us to create a clear segregation of the header from the main body
 * 
 * Note that the react dom that is currently being used is is React Router Dom 5.1, the current version is Router Dom 6, so we need to watch out for this
 * 
 * 
 * @returns Nothing
 */
const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation></MainNavigation>
      <main>
        <Switch>
          <Route path="/" exact={true}>
            <Users/>
          </Route>
          <Route path="/places/new" exact={true}>
            <NewPlaces/>
          </Route>
          <Redirect to = "/"></Redirect>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
