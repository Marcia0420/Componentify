import React from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';



const DocsIntro = () => {
    window.scrollTo(0, 0);
    return (


        <div className="container">
            <div className="row" id="main">
                <SideBar />
                <div className="col-10">
                    {/* seccion derecha de la pagina */}
                    <div className="container">
                        <div className="row">
                            {/* titulo */}

                            <h1 className="mt-3"> <strong>Getting started with </strong><span className="text-componentify"><strong>Componentify</strong></span></h1>
                            <p className="fs-5 mt-2 mb-3">Componentify is the world’s most popular component framework for building feature rich, blazing fast applications. Build anything—from prototype to production—in minutes.</p>
                            <h5 className="text-componentify">No CSS knowledge required.</h5>
                            <h2 className="mt-4">Quick & easy start</h2>
                            <p>Get started by including Componentify's production-ready CSS via CDN without the need for any build steps.</p>
                            <p><span className="text-componentify">1. </span>Create a new index.html file in your project root. Include the <code className="text-componentify">{`<meta name="viewport">`}</code> tag as well for proper responsive behavior in
                                mobile devices.</p>
                            <div className="col-12">
                                <SyntaxHighlighter language="html" style={prism}>
                                    {`<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Componentify example</title>
    </head>
    <body>
        <h1>Hello, world of components!</h1>
    </body>
</html>`}
                                </SyntaxHighlighter>
                            </div>
                            <p className="mt-3"><span className="text-componentify">2. </span>Include Componentify’s CSS. Place the <code className="text-componentify">{`<link>`}</code> tag in the <code className="text-componentify">{`<head>`}</code> for our CSS and start using our components and classes.</p>
                            <div className="col-12">
                                <SyntaxHighlighter language="html" style={prism}>
                                    {`<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Componentify example</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Componentify-23/Componentify@main/componentify.css" crossorigin="anonymous">
    </head>
    <body>
        <h1>Hello, world of components!</h1>
    </body>
</html>`}
                                </SyntaxHighlighter>
                            </div>
                            <p className="mt-3"><span className="text-componentify">3. </span><strong>Hello Componentify!</strong> Open the page in your browser of choice to see your componetified page. Now you can start building with Componentify by creating your own layout, adding dozens of components, and utilizing our official examples.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default DocsIntro;