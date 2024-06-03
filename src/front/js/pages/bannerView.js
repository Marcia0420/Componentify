import React, {useState} from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const BannerView = () => {
    const [copiedIndexes, setCopiedIndexes] = useState([]);
    const handleCopy = (i) => {
        setCopiedIndexes([...copiedIndexes, i]);
    
        setTimeout(() => {
          setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
          console.log('Texto revertido después de 3 segundos');
        }, 3000); // 3 seconds delay
    
      };
      
      const bannerList = [
`<div class="c-banner bg-componentify">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-componentify c-btn-componentify-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-slate">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-slate c-btn-slate-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-gloomy">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-gloomy c-btn-gloomy-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-aqua">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-aqua c-btn-aqua-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-silver">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-silver c-btn-silver-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-azure">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-azure c-btn-azure-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-purple">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-purple c-btn-purple-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-dark text-white">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-dark c-btn-dark-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-lollypop">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-lollypop c-btn-lollypop-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-silver">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-silver c-btn-silver-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-risk">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-risk c-btn-risk-hover" href="#" role="button">Learn More</button>
</div>`,
`<div class="c-banner bg-lavender">
    <h1 class="display-4">Welcome to our website!</h1>
    <p class="c-lead">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan libero 
    in velit fermentum, et sollicitudin arcu condimentum.
    </p>
    <hr class="c-my-4"/>
    <p>This is an example of a custom banner.</p>
    <button class="c-btn c-btn-lavender c-btn-lavender-hover" href="#" role="button">Learn More</button>
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

                            <h1 className="mt-3"><strong>Banners</strong></h1>
                            <p className="fs-5 mt-2 mb-3">The <span style={{ "color": "#FD5812" }}>c-banner component</span> a lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.</p>
                            <h6 className="mb-4 c-alert c-alert-fog mx-3" style={{ "width": "97%", fontWeight: "normal" }}><strong>Color Tip:  </strong>Here, we provide you with some examples using a selection of our colors. You can mix and match our <a style={{ "color": "#FD5812" }} href="/docs/utilities/bg-colors">backgrounds,</a> <a style={{ "color": "#FD5812" }} href="/docs/utilities/borders">borders,</a> <a style={{ "color": "#FD5812" }} href="/docs/utilities/colors"> texts,</a> <a style={{ "color": "#FD5812" }} href="/docs/components/buttons">buttons</a> and more. We'll leave that to your imagination.</h6>
                        </div>
                        
                        {/* Acá empieza el bello MAP */}
                        {bannerList.map((banner, i) => (
                        <div key={i} className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4 mt-2">
                                {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}

                                <div dangerouslySetInnerHTML={{ __html: banner }} />
                            </div>
                            <div className="col-lg-11 col-md-11 col-sm-11 col-12">
                                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                    {banner}
                                </SyntaxHighlighter>
                            </div>
                            {/* copy to clipboard */}
                            <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                                <CopyToClipboard text={banner} onCopy={() => handleCopy(i)}>
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

export default BannerView;