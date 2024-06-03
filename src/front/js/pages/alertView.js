import React, {useState} from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const AlertView = () => {
    const [copiedIndexes, setCopiedIndexes] = useState([]);
    const handleCopy = (i) => {
        setCopiedIndexes([...copiedIndexes, i]);
    
        setTimeout(() => {
          setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
          console.log('Texto revertido después de 3 segundos');
        }, 3000); // 3 seconds delay
    
      };

      const alertList = [
        '<div class="c-alert c-alert-dark" role="alert">This is a dark alert!</div>',
        '<div class="c-alert c-alert-slate" role="alert">This is a slate alert!</div>',
        '<div class="c-alert c-alert-gloomy" role="alert">This is a gloomy alert!</div>',
        '<div class="c-alert c-alert-silver" role="alert">This is a silver alert!</div>',
        '<div class="c-alert c-alert-risk" role="alert">This is a risk alert!</div>',
        '<div class="c-alert c-alert-caution" role="alert">This is a caution alert!</div>',
        '<div class="c-alert c-alert-gold" role="alert">This is a golden alert!</div>',
        '<div class="c-alert c-alert-lime" role="alert">This is a lime alert!</div>',
        '<div class="c-alert c-alert-mint" role="alert">This is a mint alert!</div>',
        '<div class="c-alert c-alert-win" role="alert">This is a win alert!</div>',
        '<div class="c-alert c-alert-azure" role="alert">This is an azure alert!</div>',
        '<div class="c-alert c-alert-aqua" role="alert">This is an aqua alert!</div>',
        '<div class="c-alert c-alert-lavender" role="alert">This is a lavender alert!</div>',
        '<div class="c-alert c-alert-purple" role="alert">This is a purple alert!</div>',
        '<div class="c-alert c-alert-lollypop" role="alert">This is a lollypop alert!</div>',
        '<div class="c-alert c-alert-fog" role="alert">This is a foggy alert!</div>',
        '<div class="c-alert c-alert-componentify" role="alert">This is a componentify alert!</div>',
        '<div class="c-alert c-alert-mocca" role="alert">This is a mocca alert!</div>'
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

                            <h1 className="mt-3"><strong>Alerts</strong></h1>
                            <p className="fs-5 mt-2 mb-3">The <span style={{ "color": "#FD5812" }}>c-alert component</span> is used to convey important information to the user through the use of contextual types, icons, and colors.
                                Alerts are available for any length of text. For proper styling, use one of the eighteen required contextual classes (e.g., <span className="text-componentify">.c-alert-componentify</span>).</p>
                        </div>
                        {/* Acá empieza el bello MAP */}
                        {alertList.map((alert, i) => (
                        <div key={i} className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                                {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}
                                <div dangerouslySetInnerHTML={{ __html: alert }} />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                    {alert}
                                </SyntaxHighlighter>
                            </div>
                            {/* copy to clipboard */}
                            <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                                <CopyToClipboard text={alert} onCopy={() => handleCopy(i)}>
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



export default AlertView;
// ESTRUCTURA
{/* <div className="container">
    <div className="row">
    <SideBar />
        <div className="col-10">
            <div className="container">
                <div className="row">
                    <h1 className="mt-3">Título del componente</h1>
                    <p className="fs-5 mt-2 mb-3">Párrafo explicando el componente.</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                        Acá va el componente
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                        <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                            {`Acá va el código`}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}

// return (


//     <div className="container">
//         <div className="row">
//             <SideBar />
//             <div className="col-10">
//                 {/* seccion derecha de la pagina */}
//                 <div className="container">
//                     <div className="row">
//                         {/* titulo */}

//                         <h1 className="mt-3">Alerts</h1>
//                         <p className="fs-5 mt-2 mb-3">The <span style={{ "color": "#FD5812" }}>c-alert component</span> is used to convey important information to the user through the use of contextual types, icons, and colors.
//                             Alerts are available for any length of text. For proper styling, use one of the eighteen required contextual classes (e.g., <span className="text-componentify">.c-alert-componentify</span>).</p>
//                     </div>

//                     <div className="row">
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-dark" role="alert">
//                                 This is a dark alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-dark" role="alert"> This is a dark alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-slate" role="alert">
//                                 This is a slate alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-slate" role="alert"> This is a slate alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-gloomy" role="alert">
//                                 This is a gloomy alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-gloomy" role="alert"> This is a gloomy alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-silver" role="alert">
//                                 This is a silver alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-silver" role="alert"> This is a silver alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-risk" role="alert">
//                                 This is a risk alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-risk" role="alert"> This is a risk alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-caution" role="alert">
//                                 This is a caution alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-caution" role="alert"> This is a caution alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-gold" role="alert">
//                                 This is a golden alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-gold" role="alert"> This is a golden alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-lime" role="alert">
//                                 This is a lime alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-lime" role="alert"> This is a lime alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-mint" role="alert">
//                                 This is a mint alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-mint" role="alert"> This is a mint alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-win" role="alert">
//                                 This is a win alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-win" role="alert"> This is a win alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-azure" role="alert">
//                                 This is an azure alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-azure" role="alert"> This is an azure alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-aqua" role="alert">
//                                 This is an aqua alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-aqua" role="alert"> This is an aqua alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-lavender" role="alert">
//                                 This is a lavender alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-lavender" role="alert"> This is a lavender alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-purple" role="alert">
//                                 This is a purple alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-purple" role="alert"> This is a purple alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-lollypop" role="alert">
//                                 This is a lollypop alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-lollypop" role="alert"> This is a lollypop alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-foggy" role="alert">
//                                 This is a foggy alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-foggy" role="alert"> This is a foggy alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-componentify" role="alert">
//                                 This is a componentify alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-componentify" role="alert"> This is a componentify alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                         <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                             <div className="c-alert c-alert-mocca" role="alert">
//                                 This is a mocca alert!
//                             </div>
//                         </div>
//                         <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                             <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                                 {`<div class="c-alert c-alert-mocca" role="alert"> This is a mocca alert!</div>`}
//                             </SyntaxHighlighter>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )
// }