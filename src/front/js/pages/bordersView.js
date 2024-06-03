import React, {useState} from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';



export const BorderView = () => {
    const [copiedIndexes, setCopiedIndexes] = useState([]);
    const handleCopy = (i) => {
        setCopiedIndexes([...copiedIndexes, i]);
    
        setTimeout(() => {
          setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
          console.log('Texto revertido después de 3 segundos');
        }, 3000); // 3 seconds delay
    
      };

      const borderList = [
        '<div class="brd-risk">.brd-risk</div>',
        '<div class="brd-caution">.brd-caution</div>',
        '<div class="brd-silver">.brd-silver</div>',
        '<div class="brd-gold">.brd-gold</div>',
        '<div class="brd-lime">.brd-lime </div>',
        '<div class="brd-azure">.brd-azure</div>',
        '<div class="brd-mocca">.brd-mocca</div>',
        '<div class="brd-aqua">.brd-aqua</div>',
        '<div class="brd-slate">.brd-slate</div>',
        '<div class="brd-componentify">.brd-componentify</div>',
        '<div class="brd-lollypop">.brd-lollypop</div>',
        '<div class="brd-mint">.brd-mint</div>',
        '<div class="brd-gloomy">.brd-gloomy</div>',
        '<div class="brd-fog">.brd-fog</div>',
        '<div class="brd-dark">.brd-dark</div>',
        '<div class="brd-win">.brd-win</div>',
        '<div class="brd-lavender">.brd-lavender</div>',
        '<div class="brd-purple">.brd-purple</div>'
      ]
    return (
        <div className="container">
            <div className="row">
                <SideBar />
                <div className="col-10">
                    <div className="container">
                        <div className="row">
                            
                            <h1 className="mt-3"><strong>Borders</strong></h1>
                            <p className="fs-5 mt-2 mb-3">Use border utilities to quickly style the border-color of any element. Change the border color using utilities built on our theme colors.</p>
                            <div className="c-alert c-alert-lavender mt-2 mb-2 mx-3" role="alert" style={{width:"97%"}}>
                                <span><strong>Color Tip:  </strong> You can modify the default border-color of a component: Great for images, buttons, or any other element</span>
                            </div>
                        </div>

                        <div className="container border rounded my-3 py-3">
                            {/* Acá empieza el bello MAP */}
                            {borderList.map((border, i) => (
                            <div key={i} className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-12 align-self-center">
                                    {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}
                                    <div dangerouslySetInnerHTML={{ __html: border }} />
                                </div>




                                <div className="col-lg-8 col-md-8 col-sm-8 col-12" >
                                    <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                        {border}
                                    </SyntaxHighlighter>
                                </div>
                                {/* copy to clipboard */}
                                <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                                    <CopyToClipboard text={border} onCopy={() => handleCopy(i)}>
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

