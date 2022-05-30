// import React from 'react';
// import {NavLink} from 'react-router-dom'
  
// const PageNotFound= () =>{
//     return (

//     <div>
//         <h5>Zuitt Booking</h5>
//         <h1>Page Not Found</h1>
//         <p>Go back to <NavLink to="/">homepage</NavLink></p>
        
//     </div>
//     )
// }

// export default PageNotFound;

import { Row, Col} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export default function PageNotFound() {
    return(

        <Row>
            <Col>
                <h1> 404 - Page not found</h1>
                <p>The page you are looking for connot found</p>
                <p>Go back to <NavLink to="/">homepage</NavLink></p>
            </Col>
        </Row>


        )
}
