import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchForClasses from './Search/searchforclasses';
import SearchResults from './Search/searchresults';
import ViewMyClasses from './Classes/viewmyclasses';
import ShoppingCart from './Shopping/shoppingcart';
import MySchedule from './Schedule/myschedule';
import DropClasses from './Classes/dropclasses';
import BrowseCatalog from './Catelog/browsecatalog';
import LandingPage from './landingpage';
import Success from './Search/success';
import InitializePage from './initialize';
import SemesterCourses from './Classes/semestercourses';


const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/searchforclasses" component={SearchForClasses} />
            <Route path="/viewmyclasses" component={ViewMyClasses} />
            <Route path="/shoppingcart" component={ShoppingCart} />
            <Route path="/myschedule" component={MySchedule} />
            <Route path="/dropclasses" component={DropClasses} />
            <Route path="/browsecatalog" component={BrowseCatalog} />
            <Route path="/searchresults" component={SearchResults}/>
            <Route path="/success" component={Success}/>
            <Route path="/initialize" component={InitializePage} />
            <Route path="/semestercourses" component={SemesterCourses} />
           
        </Switch>
    )
    
}

export default Main;