import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from "../store/appContext";


export const Admin = () => {
  const [quoteData, setQuoteData] = useState([]);
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch(process.env.BACKEND_URL + "/api/quotes");
      const data = await response.json();
      setQuoteData(data.results);
      console.log("All Quotes: ", data.results);
    };


    // Verifica si el usuario está autenticado al cargar la página
    const isAuthenticated = !!localStorage.getItem('token'); 

    if (!isAuthenticated) {
      // Si el usuario no está autenticado, alert
      Swal.fire({
        icon: 'warning',
        title: 'Access Denied',
        text: 'You must loggin as an admin to access this section.',
        confirmButtonText: 'Go to Login',
        allowOutsideClick: false,
      }).then(() => {
        // Redirige a la página de inicio de login
        navigate('/login');
      });
    }
    else{
      fetchQuotes();
    }
 
    
  }, []);

  // Función para convertir datos hexadecimales en una URL de imagen
  const hexToImageUrl = (hex) => {
    const buffer = hexToBuffer(hex);
    const blob = new Blob([buffer], { type: "image/jpeg" });
    return URL.createObjectURL(blob);
  };

  // Función para convertir datos hexadecimales en un ArrayBuffer
  const hexToBuffer = (hex) => {
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);

    for (let i = 0; i < hex.length; i += 2) {
      view.setUint8(i / 2, parseInt(hex.substr(i, 2), 16));
    }

    return buffer;
  };

  async function logout(event) { // al presionar el botón logout, redirecciona al home y tiene que aparecer el botón login en la barra
    event.preventDefault()
    actions.logout()
    navigate("/")
}


  // admin-component
  return (
    <div className="container">

      <h3 class="text-lavender my-3">Admin Section</h3>

      <hr/>

      <div className="m-2 mt-4">
      <Link to={"/admin-component"} >
      <button type="button" className="c-btn c-btn-lavender c-btn-lavender-hover">To admin components</button>
      </Link>

      
      <button type="button" class="c-btn c-btn-fog c-btn-fog-hover ms-5" onClick={logout} >Log out</button>
     

      </div>

      

      <hr/>

      <div class="c-alert c-alert-lavender" role="alert">  Quote list </div>


      <div className="row mt-5">
      {quoteData.map((quote) => (
        <div key={quote.id} className="col-md-6 col-lg-4 mb-4 ">
          <div className="card h-100 brd-lavender">
            <img 
              src={hexToImageUrl(quote.image)}
              className="card-img-top p-3"
              alt="..."
              style={{
                height: "300px",
                objectFit: "cover"
              }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{quote.name}</h5>
                <p className="card-text flex-grow-1">{quote.message}</p>
                <p className="mt-auto">{quote.email}</p>
              </div>
              <div className="m-2">
                <button type="button" className="c-btn c-btn-lavender c-btn-lavender-hover">Reply</button>
                
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
};



// const [imageData, setImageData] = useState('');

// useEffect(() => {
//   const fetchImage = async () => {
//     const response = await fetch(process.env.BACKEND_URL + "/api/image/" + 1);
//     const data = await response.json();
//     setImageData(data.results);
//     console.log("BY NAME: ", data.results);
//   };

//   fetchImage();
// }, []);