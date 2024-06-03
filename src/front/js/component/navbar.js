import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import ComponentifyLogo from "../../img/logo-componentify-2.png"

import algoliasearch from 'algoliasearch';


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const client = algoliasearch('E7UWR5K9DY', 'edc673ca333fd55924b94e54e5c95c64');
	const index = client.initIndex('componentes');

	const [searchResults, setSearchResults] = useState([ ]);
	
	const search = async (event,query) => {
		event.preventDefault()		
	  try {
		const response = await index.search(query);
		console.log(response)
		setSearchResults(response.hits);
	  } catch (error) {
		console.error(error);
	  }
	};
	
	async function logout(event) { // al presionar el botón logout, redirecciona al home y tiene que aparecer el botón login en la barra
        event.preventDefault()
		actions.logout()
        navigate("/")
    }

	return (
    <nav className="navbar navbar-expand-md transpa"  style={{"backgroundColor":"#900C3F", borderBottom: "2px solid #b87333", background: "linear-gradient(to right, #900C3F, #FD5812)"}}>
    <div className="container">
      <Link to="/">
        <img src={ComponentifyLogo} alt="Logo" width="46" height="38" className="d-inline-block align-text-center me-2" d-flex align-items-center />
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/docs/getting-started/introduction" className="nav-link text-white align-items-left">
              Docs
            </Link>
          </li>
          <li className="nav-item d-flex align-items-center">
            <Link to="/contribute" className="nav-link text-white">
              Contribute
            </Link>
          </li>

          <li className="nav-item d-flex align-items-center">
            <Link to="/quotes" className="nav-link text-white">
            Get a Quote
            </Link>
          </li>
            
          <li className="nav-item d-flex align-items-center">
            <Link to="/suggest" className="nav-link text-white">
              Suggest
            </Link>
          </li>
 </ul>


          <ul className="navbar-nav ml-auto">
      <li className="nav-item d-flex align-items-center">
        <a href="https://github.com/Componentify-23/Componentify" className="px-2" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-github text-white" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.20.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 0.27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </li>
      <li className="nav-item d-flex align-items-center  border-end border-dark-subtle pe-2 ">
        <a href="https://opencollective.com/growingupcomponentify#category-CONNECT" className="px-2" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-opencollective text-white" viewBox="0 0 16 16">
            <path fillOpacity=".4" d="M12.995 8.195c0 .937-.312 1.912-.78 2.693l1.99 1.99c.976-1.327 1.6-2.966 1.6-4.683 0-1.795-.624-3.434-1.561-4.76l-2.068 2.028c.468.781.78 1.679.78 2.732h.04Z" />
            <path d="M8 13.151a4.995 4.995 0 1 1 0-9.99c1.015 0 1.951.273 2.732.82l1.95-2.03a7.805 7.805 0 1 0 .04 12.449l-1.951-2.03a5.072 5.072 0 0 1-2.732.781H8Z" />
          </svg>
        </a>
      </li>


      <li className="nav-item d-flex align-items-center text-white  border-end border-dark-subtle ps-2 pe-2 ">
        v1.0.0
      </li>

    </ul>
     
      </div>
    </div>
  </nav>
      
	);
};





{/* <div className="nav-item justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <form className="" role="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => search(e, e.target.value)}
                  />
                </form>
              </li>
            </ul>
          </div> */}


              {/* <li  className="nav-item ms-1 pt-2 mb-1 ml-auto">
                {store.auth ?
                  <div className="btn-group">
                    <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent" >
                      <i className="fa fa-user"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" style={{ right: "0", left: "auto" }}>
                      <li><a className="dropdown-item" href="#">Account settings</a></li>
                      <li><a className="dropdown-item" href="#">Favorites</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a onClick={logout} className="dropdown-item" href="#">Log Out</a></li>
                    </ul>
                  </div> :
                  <Link to="/login" className="btn btn-outline-light" type="submit">Login</Link>
                }
              </li> */}