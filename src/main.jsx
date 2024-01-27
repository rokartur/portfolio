import './styles/globals.scss'

import { render } from 'preact'
import { HelmetProvider } from 'react-helmet-async'
import Router from 'preact-router'
import AsyncRoute from 'preact-async-route'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from './components/header/header.jsx'
import Home from './pages/home.jsx'
import AboutMe from './pages/aboutme.jsx'
import Portfolio from './pages/portfolio.jsx'
import NotFound from './pages/404.jsx'
import Footer from './components/footer/footer.jsx'

import scrollToTop from './utils/scrollToTop.jsx'
import AnimatedCursor from 'react-animated-cursor'

gsap.registerPlugin(ScrollTrigger)

export const App = () => {
	scrollToTop()

	return (
		<>
			<AnimatedCursor
				color="254, 72, 28"
				outerAlpha={0}
				innerSize={0}
				outerSize={32}
				innerScale={.8}
				outerScale={1.5}
				outerStyle={{
					border: '1px solid rgba(255, 255, 255, .3)',
					mixBlendMode: 'difference',
				}}
				trailingSpeed={7}
				showSystemCursor={true}
			/>

			<Header/>
			<HelmetProvider>
				<Router>
					<AsyncRoute path={'/'} component={Home}/>
					<AsyncRoute path={'/about-me'} component={AboutMe}/>
					<AsyncRoute path={'/portfolio/:project?'} component={Portfolio}/>

					<NotFound default/>
				</Router>
			</HelmetProvider>
			<Footer/>
		</>
	)
}

render(<App/>, document.body)
