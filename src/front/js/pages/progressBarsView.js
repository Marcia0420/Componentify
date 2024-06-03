import React, {useState} from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const ProgressBarsView = () => {
    const [copiedIndexes, setCopiedIndexes] = useState([]);
    const handleCopy = (i) => {
        setCopiedIndexes([...copiedIndexes, i]);
    
        setTimeout(() => {
          setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
          console.log('Texto revertido después de 3 segundos');
        }, 3000); // 3 seconds delay
    
      };
      
      const progressBarList = [
`<div class="c-progress-25">
    <div class="c-progress-25-bar bg-componentify">
        <span class="c-progress-text text-componentify">25%</span>
    </div>
</div>`,
`<div class="c-progress-25">
    <div class="c-progress-25-bar bg-risk">
        <span class="c-progress-text text-risk">25%</span>
    </div>
</div>`,
`<div class="c-progress-25">
    <div class="c-progress-25-bar bg-caution">
        <span class="c-progress-text text-caution">25%</span>
    </div>
</div>`,
`<div class="c-progress-50">
    <div class="c-progress-50-bar bg-azure">
        <span class="c-progress-text text-azure">50%</span>
    </div>
</div>`,
`<div class="c-progress-50">
    <div class="c-progress-50-bar bg-aqua">
        <span class="c-progress-text text-aqua">50%</span>
    </div>
</div>`,
`<div class="c-progress-50">
    <div class="c-progress-50-bar bg-slate">
        <span class="c-progress-text text-slate">50%</span>
    </div>
</div>`,
`<div class="c-progress-75">
    <div class="c-progress-75-bar bg-mocca">
        <span class="c-progress-text text-mocca">75%</span>
    </div>
</div>`,
`<div class="c-progress-75">
    <div class="c-progress-75-bar bg-gold">
        <span class="c-progress-text text-gold">75%</span>
    </div>
</div>`,
`<div class="c-progress-75">
    <div class="c-progress-75-bar bg-mint">
        <span class="c-progress-text text-mint">75%</span>
    </div>
</div>`,
`<div class="c-progress-100">
    <div class="c-progress-100-bar bg-win">
        <span class="c-progress-text text-win">100%</span>
    </div>
</div>`,
`<div class="c-progress-100">
    <div class="c-progress-100-bar bg-purple">
        <span class="c-progress-text text-purple">100%</span>
    </div>
</div>`,
`<div class="c-progress-100">
    <div class="c-progress-100-bar bg-lollypop">
        <span class="c-progress-text text-lollypop">100%</span>
    </div>
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

                            <h1 className="mt-3"><strong>Progress bars</strong></h1>
                            <p className="fs-5 mt-2 mb-3">The <span style={{ "color": "#FD5812" }}>c-progress bar component</span> is used to convey data visually to users. It supports both indeterminate amounts, such as loading or processing, and finite amounts of progress.</p>
                            <h6 className="mb-4 c-alert c-alert-fog mx-3" style={{ "width": "97%", fontWeight: "normal" }}><strong>Color Tip:  </strong>Here, we provide you with some examples using a selection of our colors. You can mix and match our <a style={{ "color": "#FD5812" }} href="/docs/utilities/bg-colors">backgrounds,</a> <a style={{ "color": "#FD5812" }} href="/docs/utilities/borders">borders,</a> <a style={{ "color": "#FD5812" }} href="/docs/utilities/colors"> texts,</a> <a style={{ "color": "#FD5812" }} href="/docs/components/buttons">buttons</a> and more. We'll leave that to your imagination.</h6>
                        </div>
                        
                        {/* Acá empieza el bello MAP */}
                        {progressBarList.map((progBar, i) => (
                        <div key={i} className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4 mt-2">
                                {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}

                                <div dangerouslySetInnerHTML={{ __html: progBar }} />
                            </div>
                            </div>
                        ))} 
                        {/* Acá termina el bello MAP y cerramos la row */}
                         {/* Acá empieza el bello MAP */}
                         {progressBarList.map((progBar, i) => (
                        <div key={i} className="row">
                            <div className="col-lg-11 col-md-11 col-sm-11 col-12">
                                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                    {progBar}
                                </SyntaxHighlighter>
                            </div>
                            {/* copy to clipboard */}
                            <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                                <CopyToClipboard text={progBar} onCopy={() => handleCopy(i)}>
                                    {copiedIndexes.includes(i) ? <i class="fa-solid fa-check fa-xl text-componentify"></i>: <i class="fa-regular fa-clipboard fa-xl text-fog"></i>}
                                </CopyToClipboard>
                            </div>
                        </div>
                        ))} 
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBarsView;