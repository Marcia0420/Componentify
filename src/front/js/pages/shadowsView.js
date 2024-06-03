import React, {useState} from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';




export const ShadowView = () => {
    const [copiedIndexes, setCopiedIndexes] = useState([]);
    const handleCopy = (i) => {
        setCopiedIndexes([...copiedIndexes, i]);
    
        setTimeout(() => {
          setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
          console.log('Texto revertido después de 3 segundos');
        }, 3000); // 3 seconds delay
    
      };

      const shadowList = [
        '<div class="c-shadow-risk">Color Risk Shadow</div>',
        '<div class="c-shadow-caution">Color Caution Shadow</div>',
        '<div class="c-shadow-silver">Color Silver Shadow</div>',
        '<div class="c-shadow-gold">Color Gold Shadow</div>',
        '<div class="c-shadow-lime">Color Lime Shadow</div>',
        '<div class="c-shadow-azure">Color Azure Shadow</div>',
        '<div class="c-shadow-mocca">Color Mocca Shadow</div>',
        '<div class="c-shadow-aqua">Color Aqua Shadow</div>',
        '<div class="c-shadow-slate">Color Slate Shadow</div>',
        '<div class="c-shadow-componentify">Color Componentify</div>',
        '<div class="c-shadow-lollypop">Color Lollypop Shadow</div>',
        '<div class="c-shadow-mint">Color Mint Shadow</div>',
        '<div class="c-shadow-gloomy">Color Gloomy Shadow</div>',
        '<div class="c-shadow-dark">Color Dark Shadow</div>',
        '<div class="c-shadow-win">Color Win Shadow</div>',
        '<div class="c-shadow-lavender">Color Lavender Shadow</div>',
        '<div class="c-shadow-purple">Color Purple Shadow</div>'
      ]
    return (
        <div className="container">
            <div className="row">
                <SideBar />
                <div className="col-10">
                    <div className="container">
                        <div className="row">
                            
                            <h1 className="mt-3"><strong>Shadows</strong></h1>
                            <p className="fs-5 mt-2 mb-3">The <span style={{ "color": "#FD5812" }}>c-shadow </span> component provides a versatile set of shadow styles that can be easily applied to containers, adding depth and dimension to your web elements. These shadows come in a variety of colors, allowing you to match them seamlessly with your design palette. Whether you want to create a subtle sense of elevation or make your elements stand out with pronounced shadows, the c-shadow component offers the flexibility to achieve your desired visual effects.</p>
                            <div className="c-alert c-alert-lavender mt-2 mb-2 mx-3" role="alert" style={{width:"97%"}}>
                                <span><strong>Usage: </strong> To use the c-shadow component, simply apply the corresponding class to your HTML container element. Choose from a range of colors, such as Risk, Caution, Silver, Gold, Lime, Azure, Mocca, Aqua, Slate, Componentify, Lollypop, Mint, Gloomy, Dark, Win, Lavender, or Purple, to achieve the desired shadow effect.</span>
                            </div>
                        </div>
                        
                        <div className="container border rounded my-3 py-3">
                            {/* Acá empieza el bello MAP */}
                            {shadowList.map((shadow, i) => (
                            <div key={i} className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-12 align-self-center">
                                    {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}
                                    <div className="p-3" dangerouslySetInnerHTML={{ __html: shadow }} />
                                </div>




                                <div className="col-lg-8 col-md-8 col-sm-8 col-12" >
                                    <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                        {shadow}
                                    </SyntaxHighlighter>
                                </div>
                                {/* copy to clipboard */}
                                <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                                    <CopyToClipboard text={shadow} onCopy={() => handleCopy(i)}>
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
        </div>


    )
}