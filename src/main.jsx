import './styles/globals.scss'
import 'custom-cursor-react/dist/index.css'
import CustomCursor from 'custom-cursor-react'
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

gsap.registerPlugin(ScrollTrigger)

export const App = () => {
	scrollToTop()

	return (
		<>
			<CustomCursor
				targets={['.link', 'a', 'button']}
				customClass='custom-cursor'
				dimensions={84}
				fill='#FFFFFF00'
				smoothness={{
					movement: 0.07,
					scale: 0.1,
					opacity: 1,
				}}
				strokeColor={'#FFF'}
				strokeWidth={1}
				opacity={.3}
				targetOpacity={.3}
				targetScale={1.4}
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
