import React, {useState} from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const ButtonView = () => {

  const [copiedIndexes, setCopiedIndexes] = useState([]);
    const handleCopy = (i) => {
        setCopiedIndexes([...copiedIndexes, i]);
    
        setTimeout(() => {
          setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
          console.log('Texto revertido después de 3 segundos');
        }, 3000); // 3 seconds delay
    
      };

      const buttonList = [
        '<button type="button" class="c-btn c-btn-dark">Dark</button>',
        '<button type="button" class="c-btn c-btn-slate">Slate</button>',
        '<button type="button" class="c-btn c-btn-gloomy">Gloomy</button>',
        '<button type="button" class="c-btn c-btn-silver">Silver</button>',
        '<button type="button" class="c-btn c-btn-risk">Risk</button>',
        '<button type="button" class="c-btn c-btn-caution">Caution</button>',
        '<button type="button" class="c-btn c-btn-gold">Gold</button>',
        '<button type="button" class="c-btn c-btn-lime">Lime</button>',
        '<button type="button" class="c-btn c-btn-mint">Mint</button>',
        '<button type="button" class="c-btn c-btn-win">Win</button>',
        '<button type="button" class="c-btn c-btn-azure">Azure</button>',
        '<button type="button" class="c-btn c-btn-aqua">Aqua</button>',
        '<button type="button" class="c-btn c-btn-lavender">Lavender</button>',
        '<button type="button" class="c-btn c-btn-purple">Purple</button>',
        '<button type="button" class="c-btn c-btn-lollypop">Lollypop</button>',
        '<button type="button" class="c-btn c-btn-fog">Fog</button>',
        '<button type="button" class="c-btn c-btn-componentify">Componentify</button>',
        '<button type="button" class="c-btn c-btn-mocca">Mocca</button>'
      ]

      const buttonHoveredList = [
        '<button type="button" class="c-btn c-btn-dark c-btn-dark-hover">Dark</button>',
        '<button type="button" class="c-btn c-btn-slate c-btn-slate-hover">Slate</button>',
        '<button type="button" class="c-btn c-btn-gloomy c-btn-gloomy-hover">Gloomy</button>',
        '<button type="button" class="c-btn c-btn-silver c-btn-silver-hover">Silver</button>',
        '<button type="button" class="c-btn c-btn-risk c-btn-risk-hover">Risk</button>',
        '<button type="button" class="c-btn c-btn-caution c-btn-caution-hover">Caution</button>',
        '<button type="button" class="c-btn c-btn-gold c-btn-gold-hover">Gold</button>',
        '<button type="button" class="c-btn c-btn-lime c-btn-lime-hover">Lime</button>',
        '<button type="button" class="c-btn c-btn-mint c-btn-mint-hover">Mint</button>',
        '<button type="button" class="c-btn c-btn-win c-btn-win-hover">Win</button>',
        '<button type="button" class="c-btn c-btn-azure c-btn-azure-hover">Azure</button>',
        '<button type="button" class="c-btn c-btn-aqua c-btn-aqua-hover">Aqua</button>',
        '<button type="button" class="c-btn c-btn-lavender c-btn-lavender-hover">Lavender</button>',
        '<button type="button" class="c-btn c-btn-purple c-btn-purple-hover">Purple</button>',
        '<button type="button" class="c-btn c-btn-lollypop c-btn-lollypop-hover">Lollypop</button>',
        '<button type="button" class="c-btn c-btn-fog c-btn-fog-hover">Fog</button>',
        '<button type="button" class="c-btn c-btn-componentify c-btn-componentify-hover">Componentify</button>',
        '<button type="button" class="c-btn c-btn-mocca c-btn-mocca-hover">Mocca</button>'
      ]
  return (
    <div className="container">
      <div className="row">
        <SideBar />
        <div className="col-10">
          <div className="container">
            <div className="row">
              <h1 className="mt-3 mb-3"><strong>Buttons</strong></h1>

              <h4 className="mb-1"> Base class </h4>
              <p className="fs-5 mt-2 mb-3">Componentify has a base <span style={{ "color": "#FD5812" }}>c-btn</span>   class that sets up basic styles such as padding and content alignment. By default, .btn controls have a transparent border and background color, and lack any explicit focus and hover styles.</p>
            </div>

            <h4 className="mb-1">Variants</h4>
            <p className="fs-5 mt-2 mb-3"> Componentify includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
            {/* Acá empieza el bello MAP */}
            {buttonList.map((button, i) => (
            <div className="row">
              <div className="col-lg-2 col-md-1 col-sm-1 col-12 text-start">
                {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}
                <div dangerouslySetInnerHTML={{ __html: button }} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {button}
                </SyntaxHighlighter>
              </div>
              <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                <CopyToClipboard text={button} onCopy={() => handleCopy(i)}>
                  {copiedIndexes.includes(i) ? <i class="fa-solid fa-check fa-xl text-componentify"></i>: <i class="fa-regular fa-clipboard fa-xl text-fog"></i>}
                </CopyToClipboard>
              </div>

              </div>
                        ))} 
                        {/* Acá termina el bello MAP y cerramos la row */}
              


              <hr className="mb-5 mt-5"></hr>
              {/* COMIENZA CODIGO BOTTONS HOVER */}

              <h4 className="mb-1"> <strong>Hover</strong></h4>
              <p className="fs-5 mt-2 mb-3">Hovered buttons are used throughout the website to highlight
                interactive elements, such as links, calls to action, or buttons, making it clear to users
                that they can interact with the content.</p>

            {/* Acá empieza el bello MAP */}
            {buttonHoveredList.map((button, i) => (
            <div className="row">
              <div className="col-lg-2 col-md-1 col-sm-1 col-12  align-self-center">
                {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}
                <div dangerouslySetInnerHTML={{ __html: button }} />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {button}
                </SyntaxHighlighter>
              </div>
              <div className='col-1 col-md-1 col-sm-1 align-self-center'>
                <CopyToClipboard text={button} onCopy={() => handleCopy(i)}>
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

