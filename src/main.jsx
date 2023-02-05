import "./styles/globals.scss";

import {render} from "preact";
import {HelmetProvider} from "react-helmet-async";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Header from "./components/header/header.jsx";
import Home from "./pages/home.jsx";
import AboutMe from "./pages/aboutme.jsx";
import NotFound from "./pages/404.jsx";
import Footer from "./components/footer/footer.jsx";

import scrollToTop from "./utils/scrollToTop.jsx";

gsap.registerPlugin(ScrollTrigger);

export const App = () => {
    scrollToTop()

    return (
        <>
            <Header/>

            <HelmetProvider>
                <Router>
                    <AsyncRoute path={"/"} component={Home}/>
                    <AsyncRoute path={"/about-me"} component={AboutMe}/>

                    <NotFound default/>
                </Router>
            </HelmetProvider>

            <Footer/>
        </>
    );
}

render(<App/>, document.body);
