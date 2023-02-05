import "./styles/globals.scss";

import {render} from "preact";
import {HelmetProvider} from "react-helmet-async";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import Header from "./components/header/header.jsx";
import Home from "./pages/home.jsx";
import NotFound from "./pages/codes/404.jsx";

import scrollToTop from "./utils/scrollToTop.jsx";

gsap.registerPlugin(ScrollTrigger);

export const App = () => {
    scrollToTop()

    return (
        <>
            {/*<AnimatedCursor*/}
            {/*    color="254, 72, 28"*/}
            {/*    outerAlpha={0}*/}
            {/*    innerSize={0}*/}
            {/*    outerSize={32}*/}
            {/*    innerScale={.8}*/}
            {/*    outerScale={1.5}*/}
            {/*    outerStyle={{*/}
            {/*        border: "1px solid rgba(255, 255, 255, .3)",*/}
            {/*        mixBlendMode: "difference"*/}
            {/*    }}*/}
            {/*    trailingSpeed={7}*/}
            {/*/>*/}

            <Header/>

            <HelmetProvider>
                <Router>
                    <AsyncRoute path={"/"} component={Home}/>

                    <NotFound default/>
                </Router>
            </HelmetProvider>
        </>
    );
}

render(<App/>, document.body);
