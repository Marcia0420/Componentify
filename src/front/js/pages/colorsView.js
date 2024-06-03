import React, {useState} from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';



export const ColorsView = () => {
    const [copiedIndexes, setCopiedIndexes] = useState([]);
    const handleCopy = (i) => {
        setCopiedIndexes([...copiedIndexes, i]);
    
        setTimeout(() => {
          setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
          console.log('Texto revertido después de 3 segundos');
        }, 3000); // 3 seconds delay
    
      };

      const colorList = [
        '<p class="text-risk">.text-risk</p>',
        '<p class="text-caution">.text-caution</p>',
        '<p class="text-silver">.text-silver</p>',
        '<p class="text-gold">.text-gold</p>',
        '<p class="text-lime">.text-lime </p>',
        '<p class="text-azure">.text-azure</p>',
        '<p class="text-mocca">.text-mocca</p>',
        '<p class="text-aqua">.text-aqua</p>',
        '<p class="text-slate">.text-slate</p>',
        '<p class="text-componentify">.text-componentify</p>',
        '<p class="text-lollypop">.text-lollypop</p>',
        '<p class="text-mint">.text-mint</p>',
        '<p class="text-gloomy">.text-gloomy</p>',
        '<p class="text-fog">.text-fog</p>',
        '<p class="text-dark">.text-dark</p>',
        '<p class="text-win">.text-win</p>',
        '<p class="text-lavender">.text-lavender</p>',
        '<p class="text-purple">.text-purple</p>'
      ]
    return (
        <div className="container">
            <div className="row">
                <SideBar />
                <div className="col-10">
                    <div className="container">
                        <div className="row">
                            
                            <h1 className="mt-3"><strong>Colors</strong></h1>
                            <p className="fs-5 mt-2 mb-3">Express significance using <span className="text-componentify">color</span> through a selection of color utility classes.</p>
                            <div className="c-alert c-alert-lavender mt-2 mb-3 " role="alert">
                                <p><strong>Remember this accessibility tip:  </strong> Using color to convey meaning only communicates visually, and it won't be understood by users who rely on assistive technologies like screen readers. Make sure the meaning is clear through the content itself, like having visible text with ample color contrast, or include it through alternative methods, such as hidden text using the .visually-hidden class.</p>
                            </div>
                        </div>

                        <div className="container border rounded my-3 py-3">
                            {/* Acá empieza el bello MAP */}
                            {colorList.map((color, i) => (
                            <div key={i} className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-12 align-self-center">
                                    {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}
                                    <div dangerouslySetInnerHTML={{ __html: color }} />
                                </div>




                                <div className="col-lg-8 col-md-8 col-sm-8 col-12" >
                                    <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                        {color}
                                    </SyntaxHighlighter>
                                </div>
                                {/* copy to clipboard */}
                                <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                                    <CopyToClipboard text={color} onCopy={() => handleCopy(i)}>
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

export default ColorsView;