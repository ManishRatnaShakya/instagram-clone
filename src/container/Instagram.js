import React from 'react'
import Header from './Header/Header';
import { Route} from 'react-router-dom';
import Feed from './Feed/Feed';
function Instagram({match}) {
    return (
        <div>
            <Header/>
            <Route path={ `${match.path}`} component={Feed}/>
        </div>
    )
}

export default Instagram
