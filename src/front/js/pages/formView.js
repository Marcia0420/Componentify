import React, {useState} from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const FormView = () => {
    const [copiedIndexes, setCopiedIndexes] = useState([]);
    const handleCopy = (i) => {
        setCopiedIndexes([...copiedIndexes, i]);
    
        setTimeout(() => {
          setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
          console.log('Texto revertido después de 3 segundos');
        }, 3000); // 3 seconds delay
    
      };
      
      const formList = [
`<div class="c-contact-form-azure">
    <h2>Contact form</h2>
    <form class="c-form">
        <div class="c-form-group">
            <label for="name">Name</label>
            <input type="text" id="name" class="c-form-control-azure" placeholder="Your Name" required />
        </div>
        <div class="c-form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="c-form-control-azure" placeholder="Your Email" required />
        </div>
        <div class="c-form-group">
            <label for="message">Message</label>
            <textarea id="message" class="c-form-control-azure" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="c-btn c-btn-azure c-btn-azure-hover">Send</button>
    </form>
</div>`,
`<div class="c-contact-form-lavender">
    <h2>Contact form</h2>
    <form class="c-form">
        <div class="c-form-group">
            <label for="name">Name</label>
            <input type="text" id="name" class="c-form-control-lavender" placeholder="Your Name" required />
        </div>
        <div class="c-form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="c-form-control-lavender" placeholder="Your Email" required />
        </div>
        <div class="c-form-group">
            <label for="message">Message</label>
            <textarea id="message" class="c-form-control-lavender" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="c-btn c-btn-lavender c-btn-lavender-hover">Send</button>
    </form>
</div>`,
`<div class="c-contact-form-mint">
    <h2>Contact form</h2>
    <form class="c-form">
        <div class="c-form-group">
            <label for="name">Name</label>
            <input type="text" id="name" class="c-form-control-mint" placeholder="Your Name" required />
        </div>
        <div class="c-form-group">
            <label for="email">Email</label>
            <input type="email" id="email" class="c-form-control-mint" placeholder="Your Email" required />
        </div>
        <div class="c-form-group">
            <label for="message">Message</label>
            <textarea id="message" class="c-form-control-mint" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" class="c-btn c-btn-mint c-btn-mint-hover">Send</button>
    </form>
</div>`

      ]
    return (


        <div className="container">
            <div className="row">
                <SideBar />
                <div className="col-10">
                    {/* seccion derecha de la pagina */}
                    <div className="container">
                        <div className="row">
                            {/* titulo */}

                            <h1 className="mt-3"><strong>Forms</strong></h1>
                            <p className= "fs-5 mt-2 mb-3">The <span style={{ "color": "#FD5812" }}>c-form components</span> are elegantly designed, user-friendly, and highly customizable. They are crafted to enhance user interactions and capture data effectively. With a sleek and modern appearance, these forms offer a seamless user experience, making data input and submission a breeze. Whether you need a simple contact form or a complex multi-step survey, "c-formas" forms provide a stylish solution for all your data collection needs. Tailor them to match your website's unique style and enjoy the flexibility of integrating them into any web project effortlessly.</p>
                            
                        </div>
                        
                        
                        {/* Acá empieza el bello MAP */}
                        {formList.map((form, i) => (
                        <div key={i} className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4 mt-2">
                                {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}

                                <div dangerouslySetInnerHTML={{ __html: form }} />
                            </div>
                            <div className="col-lg-11 col-md-11 col-sm-11 col-12">
                                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                    {form}
                                </SyntaxHighlighter>
                            </div>
                            {/* copy to clipboard */}
                            <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                                <CopyToClipboard text={form} onCopy={() => handleCopy(i)}>
                                    {copiedIndexes.includes(i) ? <i class="fa-solid fa-check fa-xl text-componentify"></i>: <i class="fa-regular fa-clipboard fa-xl text-fog"></i>}
                                </CopyToClipboard>
                            </div>
                            
                        </div>
                        ))} 
                        {/* Acá termina el bello MAP y cerramos la row */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormView;