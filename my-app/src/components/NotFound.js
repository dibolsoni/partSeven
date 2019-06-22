import React from 'react';
import {Link} from 'react-router-dom';


/**Generate a error message - 404
 */
const NotFound = () => (
    <div>
        <h3> Error 404 </h3>
        <p>No Results Found. You enter a wrong URL or your search did not return any results. Please try again.</p>
        <Link to={'/'}><p>Home</p></Link>
    </div>
);

export default NotFound;
      
