import React, { useEffect, useRef, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "../../styles/suggest.css"
import "../../styles/global.css"
import Swal from 'sweetalert2';
import { Context } from '../store/appContext';


export const Suggest = () => {
  const navigate = useNavigate();
  const {store, actions} = useContext(Context);

  // let userName = localStorage.getItem("name");
  // useEffect(() => {
  //   // Verifica si el usuario está autenticado al cargar la página
  //   const isAuthenticated = !!localStorage.getItem('token'); 

  //   if (!isAuthenticated) {
  //     // Si el usuario no está autenticado, alert
  //     Swal.fire({
  //       icon: 'warning',
  //       title: 'Acceso denegado',
  //       text: 'Debes iniciar sesión para acceder a esta página.',
  //       confirmButtonText: 'Ir a la página de inicio de sesión',
  //       allowOutsideClick: false,
  //     }).then(() => {
  //       // Redirige a la página de inicio de login
  //       navigate('/login');
  //     });
  //   }
  // }, []);

  return (


  <div class="px-4 py-5 px-md-5 text-center text-lg-start h-100" style={{backgroundColor: "hsl(0, 0%, 100%)"}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
        <h1 class="mb-5 display-3 fw-bold ls-tight">
            Hello there,
          </h1>
          <h2 class="my-5 fw-bold ls-tight">
          Share your Ideas with  <br />
            <span class="text-componentify">Componentify</span>
          </h2>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
          At Componentify, we value your input and creativity. We're excited to hear your thoughts and suggestions for new components that you'd like us to design 
          for our platform. Your feedback is essential in helping us improve and expand our offerings. Please take a moment to share your ideas with us, 
          and we'll carefully consider each suggestion. Thank you for being a part of Componentify!
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card" style={{ borderRadius: "1rem"}}>
            <div class="card-body py-5 px-md-5">
              <form action="https://formspree.io/f/mnqkgkeb"
                    method="POST">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <label class="form-label" for="form3Example1"style={{color: "hsl(217, 10%, 50.8%)"}}>Name</label>
                      <input type="text" id="form3Example1" class="form-control"/>
                    </div>
                  </div>
                </div>

                
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3"style={{color: "hsl(217, 10%, 50.8%)"}}>Email</label>
                  <input type="email"
                        name="email"
                        className="form-control"
                        required id="form3Example3" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                <label htmlFor="message" className="form-label" style={{color: "hsl(217, 10%, 50.8%)"}}>
                Your suggestion:
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="6"
                required
              ></textarea>
              </div>
                <button type="submit" class="c-btn c-btn-componentify c-btn-componentify-hover btn-block mb-4">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 

/* <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">¡Únete a Componentify!</h2>
          <p className="card-text">
            Estamos encantados de que formes parte de nuestra comunidad. Tus
            sugerencias son valiosas para nosotros y serán tomadas en cuenta
            para mejorar nuestra plataforma.
          </p>
          <form
            action="https://formspree.io/f/mnqkgkeb"
            method="POST"
            className="suggestion-form"
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Tu correo electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={localStorage.getItem("email")}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Tu sugerencia:
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div> */
  
  );
};






// const form = useRef();
//   const [image, setImage] = useState('');
  

//   let templateParams = {
//     name: 'James',
//     email: 'pepe@gmail.com',
//     message: 'hola amigos',
//     image: image
//   };

//   async function sendEmail() {
//     try {
//       await emailjs.send('service_isyzkhm', 'template_1dvczzn', templateParams, '4L6qDDEc0zbLka_DW')
//       console.log("enviando..")
//     } catch (error) {
      
//     }
//   }

//   function handleImageChange(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   }

//   return (
//     <div>
//       <div>
//         <input type="file" onChange={handleImageChange} />
//       </div>
//       <div>
//         <button onClick={sendEmail}>Enviar</button>
//       </div>
//     </div>

{/* <form ref={form} onSubmit={sendEmail}>
<label>Name</label>
<input type="text" name="user_name" />
<label>Email</label>
<input type="email" name="user_email" />
<label>Message</label>
<textarea name="message" />

<input type="submit" value="Send" />
</form> */}


// emailjs.sendForm('service_isyzkhm', 'template_1dvczzn', form.current, '4L6qDDEc0zbLka_DW')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });


// const sendEmail = (e) => {
//   e.preventDefault();
 
//   emailjs.sendForm('service_isyzkhm', 'template_1dvczzn', form.current, '4L6qDDEc0zbLka_DW')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
// };