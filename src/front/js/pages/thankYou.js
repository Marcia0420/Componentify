import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/intro.css";


export const ThankYou = () => {
    const { store, actions } = useContext(Context);

    return (
       
        
<div class="container d-flex justify-content-center align-items-center mb-5">
  <div class="card c-alert-lavender border border-5 mt-5" style={{ width: "80%", height: "65%"}}>
    <div class="card-body">
      <h2 class="card-title">Thank You for Your Support!</h2>
      <hr className="c- alert c-alert-lavender" />
            <p class="card-text"> Certainly! Here's a longer and more detailed thank-you message for a donation: </p>
            <p class="card-text"> "We want to express our heartfelt gratitude for your incredibly generous donation. Your unwavering support and kindness are invaluable to us, and they play a crucial role in advancing our mission and making a positive impact on the lives of those we serve. </p>
            <p class="card-text"> Your contribution goes beyond a simple financial transaction; it symbolizes your belief in our cause and your commitment to making a difference in the world. With your help, we can continue our important work, striving to achieve our goals and create lasting change in our community and beyond. </p>
            <p class="card-text"> It's supporters like you who inspire us to persevere and reach for new heights in our endeavors. Your generosity fuels our passion and motivates us to do even more to fulfill our mission. </p>
            <p class="card-text"> Once again, thank you from the bottom of our hearts for your extraordinary donation. Your support is a beacon of hope, and we are profoundly grateful for your trust in us. Together, we can make a brighter and better future for all." </p>    
            <p class="card-text">Feel free to customize this message further to suit your specific needs and express your appreciation in a more elaborate way.</p>
            <p class="card-text">Thank you once again!</p>
    </div>
  </div>
</div>

   


   
   );
}

   



