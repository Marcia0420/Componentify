import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/intro.css";
import "../../styles/signup.css";
import Swal from 'sweetalert2';


import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
    const { store, actions } = useContext(Context);

    // const [name, setName] = useState(""); // Nuevo estado para el nombre
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // // const [repeatPassword, setRepeatPassword] = useState(""); // Nuevo estado para repetir la contraseña
    // const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();

    // const handleSignup = (e) => {
    //     e.preventDefault();
    //     actions.SignupUser( name, lastName, email, password, isActive); // Agregar name y repeatPassword aquí
    //     navigate('/login');
    // };


    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            isActive: false,
        },

        validationSchema: Yup.object({
              name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
              lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
              email: Yup.string().email('Invalid email address.').required('Required').matches(/.*\.com$/, 'Email must end in .com'),
              password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
        }),

        onSubmit: async (values) => {
            //alert(JSON.stringify(values, null, 2));
            //let logged = await actions.login(values.email, values.password);
            try {

                let signup = await actions.SignupUser( values.name, values.lastName, values.email, values.password, values.isActive);
                console.log("TESTTTT: ",values.name, values.lastName, values.email, values.password, values.isActive)

                console.log("ESTOY EN EL ONSUBMIT: ", signup)    

                if(store.signupStatus) {
                    console.log("ESTOY EN EL STATUS 200")
                    navigate("/login");
                }       
            } catch (error) {
            
            }
              
          },
    });


    const letras = { color: "dark" };
    const menuColor = "#FD5812"


    useEffect(() => {
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
    }, []);

    return (

<section class="text-center text-lg-start">
  


  <div class="container py-4 mt-5">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right" style={{
            background: "hsla(0, 0%, 100%, 0.55)",
            backdropFilter: "blur(30px)"}} >
          <div class="card-body p-5 shadow-5">
            <h2 class="fw-bold mb-5">Add new admin user</h2>
            <form  onSubmit={formik.handleSubmit}>

              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input  
                    type="name"
                    className="form-control"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    id="name"
                    name="name"
                    />

                    {formik.touched.name && formik.errors.name ? (
                        <div style={{ color: menuColor}} >{formik.errors.name}</div>    
                    ) : null}
                    <label class="form-label" htmlFor="name">First name</label>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <input
                    placeholder="Last Name"
                    className="form-control"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    />

                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div style={{ color: menuColor}} >{formik.errors.lastName}</div>    
                    ) : null}
                    <label class="form-label" htmlfor="lastName">Last name</label>
                  </div>
                </div>
              </div>


              <div class="form-outline mb-4">
                <input 
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                <div style={{ color: menuColor}} >{formik.errors.email}</div>     
                ) : null}
                <label class="form-label" htmlForfor="email">Email address</label>
              </div>

 
              <div class="form-outline mb-4">
                <input 
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                <div style={{ color: menuColor}} >{formik.errors.password}</div>    
                ) : null}
                <label class="form-label" htmlFor="password">Password</label>
              </div>



              <button type="submit" class="c-btn c-btn-componentify c-btn-componentify-hover mb-4">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="https://images.pexels.com/photos/5122177/pexels-photo-5122177.jpeg?auto=compress&cs=tinysrgb&w=600" class="w-75"
          alt="" style={{ borderRadius: "1rem", boxShadow: "0 2px 45px #FF5733" }}/>
      </div>
    </div>
  </div>
</section>

    );
}

export default Signup;
{/* <div style={{background: "linear-gradient(to right, rgb(144 12 63 / 5%), rgb(144 12 63 / 5%))"}}>
<div className="container">
<div className="row">


  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
  <div className="card my-5" style={{ borderImage: 'linear-gradient(to right, #900C3F, #FD5812)', borderImageSlice: '1', borderStyle: 'solid', borderWidth: '6px'}}>
      <div className="card-body p-2 p-sm-5" style={{backgroundColor:"#c7b08c1f"}}>
        <h5 className="card-title text-center mb-5 fw-light fs-2 fw-semibold" style={{color:"#900C3F"}}>Sign Up</h5>
        <form onSubmit={formik.handleSubmit} >


            {/* name */}
            // <div className="form-floating mb-4">
            //     <input className="form-control" placeholder="Name"
            //     onChange={formik.handleChange}
            //     value={formik.values.name}
            //     id="name"
            //     name="name"
            //     type="name"
            //     />

            //     {formik.touched.name && formik.errors.name ? (
            //         <div style={{ color: menuColor}} >{formik.errors.name}</div>    
            //     ) : null}
                
            //     <label for="floatingInput" style={{ color: menuColor}}>Name</label>
            // </div>



            {/* lastName */}
            // <div className="form-floating mb-4">
            //     <input className="form-control" placeholder="name@example.com"
            //     onChange={formik.handleChange}
            //     value={formik.values.lastName}
            //     id="lastName"
            //     name="lastName"
            //     type="lastName"
            //     />

            //     {formik.touched.lastName && formik.errors.lastName ? (
            //         <div style={{ color: menuColor}} >{formik.errors.lastName}</div>    
            //     ) : null}
                
            //     <label for="floatingInput" style={{ color: menuColor}}>Last Name</label>
            // </div>


            {/* email */}
            // <div className="form-floating mb-4">
            //     <input className="form-control" placeholder="name@example.com"
            //     onChange={formik.handleChange}
            //     value={formik.values.email}
            //     id="email"
            //     name="email"
            //     type="email"
            //     />

            //     {formik.touched.email && formik.errors.email ? (
            //         <div style={{ color: menuColor}} >{formik.errors.email}</div>    
            //     ) : null}
                
            //     <label for="floatingInput" style={{ color: menuColor}}>Email address</label>
            // </div>


            {/* password */}
            // <div className="form-floating mb-4">
            //     <input className="form-control" placeholder="Password"
            //     onChange={formik.handleChange}
            //     value={formik.values.password}
            //     id="password"
            //     name="password"
            //     type="password"
            //     />
                
            //     {formik.touched.password && formik.errors.password ? (
            //         <div style={{ color: menuColor}} >{formik.errors.password}</div>    
            //     ) : null}

            //     <label for="floatingPassword" style={{ color: menuColor}}>Password</label>
            // </div>


            {/* isActive 
            <div className="form-check-input mb-3">
                <input className="form-check-input" placeholder=""
                onChange={formik.handleChange}
                value={formik.values.isActive}
                id="isActive"
                name="isActive"
                type="isActive"
                />

                {formik.touched.isActive && formik.errors.isActive ? (
                    <div style={{ color: menuColor}} >{formik.errors.isActive}</div>    
                ) : null}
                
                <label for="floatingInput" style={{ color: menuColor}}>Is Active ?</label>
            </div>
            */}

            {/* 
            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label className="form-check-label" htmlFor="rememberPasswordCheck" style={{ color: menuColor}}>
                Remember password
                </label>
            </div> 
            <div className="d-grid">
                <button className="btn btn-login text-uppercase fw-bold text-white" type="submit" style={{backgroundColor:menuColor}}>Log in</button>
            </div>
            */}


        //   <hr className="my-4"/>

            {/* 
            <div className="d-grid mb-2">
                <button className="btn btn-google btn-login text-uppercase text-white fw-bold border border-2" type="submit" style={{backgroundColor:"#3c434c"}}>
                <i className="fa-brands fa-github fa-lg me-2"></i> Sign in with Github
                </button>
            </div> 
            */}

//             <div className="d-grid">
//                 <button className="btn btn-login text-uppercase fw-bold text-white" type="submit" style={{backgroundColor:menuColor}}>Sing up</button> 
//             </div>

//         </form>
//       </div>
//     </div>
//   </div>


// </div>
// </div>
  
// </div> 

/*
<div className="d-flex justify-content-center mt-4 pb-3">
            

<form className="w-50 bg-white p-3 m-4 rounded-3 signup-form signup-form-bg" style={letras}>
    <h2 className="text-center mt-2 mb-4">REGISTER</h2>
    <div className="mb-3">
        <label htmlFor="name" className="form-label"></label>
        <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    </div>

    <div className="mb-3">
        <label htmlFor="username" className="form-label"></label>
        <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Your Last Name"
            value={lastName}
            onChange={(e) =>  setLastName(e.target.value)}
        />
    </div>

    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label"></label>
        <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Your email address"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
    </div>

    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
    </div>

     <div className="mb-3">
        <label htmlFor="repeatPassword" className="form-label"></label>
        <input
            type="password"
            className="form-control"
            id="repeatPassword"
            placeholder="Repeat your password"
            value={repeatPassword}
            onChange={(e) => {
                console.log(e.target.value);
                setRepeatPassword(e.target.value);
            }}
            
        />
    </div>} 

    <div className="mb-3 form-check">
        <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
        />
        <label className="form-check-label mb-3" htmlFor="exampleCheck1">I agree to sign up for COMPONENTIFY account notification?</label>
    </div>
    <div class="card-footer text-body">
    <button onClick={handleSignup} type="submit" className="btn btn-warning text-white">
       <strong>SIGN UP</strong> 
    </button></div>
</form>            
</div>
);

*/