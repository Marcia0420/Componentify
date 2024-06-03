import React, { Component, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import Signup from "./pages/signup";
import Login from "./pages/login";
import  AlertView  from "./pages/alertView";
import { ButtonView } from "./pages/buttonView"
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Admin } from "./pages/admin";
import { AdminComponent } from "./pages/adminComponent";
import { UserProfileData } from "./pages/userProfileData";
import Contribute from "./pages/contribute ";
import DocsIntro from "./pages/docs-introduction";
import Download from "./pages/download";
import { Context } from "./store/appContext";
import CardView from "./pages/cardView";
import { ThankYou } from "./pages/thankYou";

import { ColorsView } from "./pages/colorsView";
import { BackgroundView } from "./pages/backgroundview";

import { BadgesView } from "./pages/badgesView";
import { Suggest } from "./pages/suggest";
import  { GetAquote } from "./pages/getAquote";
import { BorderView } from "./pages/bordersView";
import BannerView from "./pages/bannerView";
import ProgressBarsView from "./pages/progressBarsView";
import { ShadowView } from "./pages/shadowsView";
import FormView from "./pages/formView";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    const { store, actions } = useContext(Context);

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Login />} path="/login" />
                        
                        <Route element={<Admin />} path="/c-admin" />
                        <Route element={<Contribute />} path="/contribute" />
                        <Route element={<ThankYou />} path="/thankyou" />
                        <Route element={<Suggest />} path="/suggest" />
                        <Route element={<GetAquote />} path="/quotes" />

                        <Route element={<DocsIntro />} path="docs/getting-started/introduction" />
                        <Route element={<AlertView />} path="docs/components/alerts" />
                        <Route element={<ButtonView />} path="docs/components/buttons" />
                        <Route element={<CardView />} path="docs/components/cards" />
                        <Route element={<BannerView />} path="docs/components/banners" />
                        <Route element={<BadgesView />} path="docs/components/badges" />
                        <Route element={<Download />} path="docs/getting-started/download" />
                        <Route element={<ProgressBarsView />} path="docs/components/progress-bars" />
                        <Route element={<FormView />} path="docs/components/forms" />

                         {/* UTILITIES */}
                        <Route element={<ColorsView />} path="docs/utilities/colors" />
                        <Route element={<BackgroundView />} path="docs/utilities/bg-colors" />
                        <Route element={<BorderView />} path="docs/utilities/borders" />
                        <Route element={<ShadowView />} path="docs/utilities/shadows" />
                         {/* UTILITIES */}

                        <Route element={<AdminComponent />} path="/admin-component" />

                        <Route element={<UserProfileData/>} path="/userprofiledata" />

                    </Routes>
                    <Footer/>
                    {/* {window.location.pathname === "/login" || window.location.pathname === "/signup" ? null : <Footer />} */}
                    {/* {store.auth ? <Footer/> : null } */}
                    </ScrollToTop>
                </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
