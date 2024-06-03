import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const Contribute = () => {
  const { store, actions } = useContext(Context)

  const pagar = async (precio) => {
   
    await actions.pagoMercadoPago(precio)

    let direccion = await store.mercadoPago.init_point
    window.location.replace(direccion)
  }
  window.scrollTo(0, 0);
  return (
    <div>
      <div className="container" id="plans" style={{ marginBottom: '150px', marginTop: '50px', textAlign: 'center' }}>
        <h1 className="my-4" style={{ fontSize: '3rem' }}>
          <strong style={{color: "#900C3F"}}> How to<span style={{ "color": "#FD5812" }}> contribute </span></strong>
        </h1>


        <div style={{ background: "linear-gradient(to right, #900C3F, #FD5812)" }}>
          <div className="container">
            <hr style={{ border: "1px solid #FFF" }} />
          </div>
          </div>
          <br />
        <h5>At Componentify, we're dedicated to making a difference. Through our innovative solutions and socially responsible initiatives, we're actively shaping a brighter future. 
          Together, let's contribute to a better tomorrow.
        
          We're thrilled to offer you these high-quality components for free. 
          However, maintaining and improving this platform takes time and resources.
       
          If you appreciate what we do and want to support our work, consider making a donation. 
          Every small contribution helps us continue creating useful and functional tools for you.
        
          We greatly appreciate your support and trust in us!

          Thank you for being a part of the Componentify community!
        </h5>
        <br />
        <div style={{ background: "linear-gradient(to right, #900C3F, #FD5812)" }}>
          <div className="container">
            <hr style={{ border: "1px solid #FFF" }} />
          </div>
        </div>
        <h5 style={{ marginBottom: '50px' }}>
          Ways to Donate
        </h5>
        <div className="row justify-content-center">
          <div className="col-md-1">
          </div>
          <div className="col-md-2">
            <div className="card shadow" style={{ backgroundColor: '#FFDAB9', height: "300px", width: "200px" }}>
              <div className="card-header">
                <h5>Support Our Work!</h5>
              </div>
              <div className="card-body">
                <p>
                  Make a one-time payment or a recurring contribution.</p>
                <hr />
                <h6 className="card-subtitle mb-2 text-muted">$199.00</h6>
                <button className="c-btn  c-btn-componentify  c-btn-componentify-hover "
                  onClick={()=>pagar(199)}
                >Contribute</button>
              </div>
            </div>
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-2">
            <div className="card shadow" style={{ backgroundColor: '#F0EAD6', height: "300px", width: "200px" }}>
              <div className="card-header">
                <h5>Support Our Work!</h5>
              </div>
              <div className="card-body">
                <p>
                  Make a one-time payment or a recurring contribution.</p>
                <hr />
                <h6 className="card-subtitle mb-2 text-muted">$499.00</h6>
                <button className="c-btn  c-btn-componentify  c-btn-componentify-hover "
                  onClick={()=>pagar(499)}
                >Contribute</button>
              </div>
            </div>
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-2">
            <div className="card shadow" style={{ backgroundColor: '#F5F5F5 ', height: "300px", width: "200px" }}>
              <div className="card-header">
                <h5>Support Our Work!</h5>
              </div>
              <div className="card-body">
                <p>
                  Make a one-time payment or a recurring contribution.</p>
                <hr />
                <h6 className="card-subtitle mb-2 text-muted">$999.00</h6>
                <button className="c-btn  c-btn-componentify  c-btn-componentify-hover "
                  onClick={()=>pagar(999)}
                >Contribute</button>
              </div>
            </div>
          </div>
          <div className="col-md-1">
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Contribute;
