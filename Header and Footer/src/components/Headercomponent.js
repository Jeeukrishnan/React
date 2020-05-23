import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends React.Component{
  
  render()
  { return( 
      <React.Fragment>
  	<Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Jeeu Kayshyap</NavbarBrand>
          </div>
        </Navbar> 
          <Jumbotron>

           <div className="container">
               <div className="row row-header">
                 <div className="col-12 col-sm-6">
                       <h1>Jeeu Kayhsyap</h1>
                       <p>We take inspiration from the Worlds best cuisines,                     
                        Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>

        </Jumbotron>
    </React.Fragment>
        );



  }



}

export default Header;