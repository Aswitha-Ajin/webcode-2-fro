
import React from 'react';

import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

function SearchComponent (){
    
    
    
    const navigate = useNavigate();
    
    return(
        <>
     
<div >

<nav  className="navbar sticky-top navbar-expand-lg navbar-dark">

<Link to="/" className="navbar-brand"><i className="far fa-newspaper"></i><h1>Web Scrapping</h1> </Link>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
</nav>
<div >


<div class="form-floating mb-3">
  <input type="search" class="form-control" id="floatingInput" placeholder="Search here"/>
  <label for="floatingInput" onClick={navigate()}>Search here</label>
</div>
  <button type="button" class="btn btn-primary" onChange={(e) =>(e.target.value)} >Search</button>
      

    
  

</div>

           
        
        </div>
        </>
    );
}
 export  default SearchComponent;
