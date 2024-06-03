import React, { useEffect, useState } from "react"; 

export const UserProfileData = () => {
  // const [userData, setUserData] = useState({
  //   name: '',
  //   last_name: '',
  //   email: '',
  //   change_password: '',
  // });

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isActive, setIsActive] = useState();
  //const [password, setPassword] = useState("");

  const fetchUserData = async (id) => {
    const response = await fetch(process.env.BACKEND_URL + "/api/user/" + id);
    const data = await response.json();
    console.log("DATAAAA A A AA  A :", data)
    setName(data.results.name);
    setEmail(data.results.email);
    setLastName(data.results.last_name);
    setIsActive(data.results.is_active);
    //setPassword(data.results.password);

  };
  
  // hay que guardar el id del user para traerlo para aca
  // ERROR >>>>>> DATAAAA A A AA  A : {msg: 'Missing Authorization Header'} 

  useEffect(() => {
    fetchUserData(1); // VA SIN EL 1
  },)

  // useEffect(() => {
  //   const fetchUserData = async (id) => {
  //     try {
  //       const response = await fetch(process.env.BACKEND_URL + "/api/user/" + id ); 
  //       if (response.ok) {
  //         const data = await response.json();
  //         setUserData({
  //           name: data.name,
  //           last_name: data.last_name,
  //           email: data.email,
  //           change_password: '', 
  //         });
  //       } else {
  //         console.error('Error al obtener los datos del usuario');
  //       }
  //     } catch (error) {
  //       console.error('Error al obtener los datos del usuario', error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  return (
    <div className="container mx-auto mt-5 p-4 bg-white rounded-lg shadow-lg" style={{ width: '40%' , height: '630px' }}>
      <h1 className="text-lg mb-4"> <strong>Your Account</strong> </h1>
      <p className="text-sm mb-4" style={{ fontSize: '1.1rem' }} >Change your name, email, or password.</p>
       

      <div className="mt-4">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="given-name"
          className="form-control"
          //value={userData.name}
          value={name}
          //onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="last-name" className="form-label">Last Name</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          autoComplete="family-name"
          className="form-control"
          //value={userData.last_name}
          value={lastName}
          //onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="form-control"
          //value={userData.email}
          value={email}
          //onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="change-password" className="form-label">Change Password</label>
        <input
          type="password"
          name="change-password"
          id="change-password"
          className="form-control"
          //value={userData.change_password}
          //value={password}
          value= "******"
          //onChange={(e) => setUserData({ ...userData, change_password: e.target.value })}
        />
      </div>

      <div className="mt-4">
        <button type="button" className="c-btn c-btn-slate c-btn-slate-hover">
          Cancel
        </button>
        <button
          type="submit"
          className="c-btn c-btn-azure c-btn-azure-hover"
        >
          Save
        </button>
      </div>
    </div>
  );
};
