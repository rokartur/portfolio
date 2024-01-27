import styles from '../styles/home.module.scss'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import relativeTime from 'dayjs/plugin/relativeTime'

import SEO from '../components/seo/seo.jsx'
import CustomImage from '../components/customImage/customImage.jsx'
import scrollToTop from '../utils/scrollToTop.jsx'

import nethizer1 from '../assets/images/projects/nethizer/nethizer-1.png'

dayjs.extend(relativeTime)
const myAge = dayjs('2004-02-05').toNow(true)

const Home = () => {
	scrollToTop()

	useEffect(() => {
		gsap.fromTo('#orange-circle-1', {
			width: '0', height: '0', borderRadius: '100%', backgroundColor: '#FE481C',
		}, {
			width: window.innerWidth > 850 ? '+=700' : '+=300',
			height: window.innerWidth > 850 ? '+=500' : '+=300',
			ease: 'back',
			duration: .4,
			scrollTrigger: {
				trigger: '#orange-circle-1', start: 'top 42%', end: '100px top', scrub: 1,
			},
		})

		gsap.fromTo('#bounce-ball', {
			translateY: '0',
		}, {
			translateY: '+=450px', duration: .4, ease: 'linear', scrollTrigger: {
				trigger: '#bounce-ball', start: 'top 54%', scrub: 1,
			},
		})

		gsap.fromTo('#hero-paragraph-background-color', {
			width: 0,
		}, {
			width: '90%', ease: 'back', duration: .4, scrollTrigger: {
				trigger: '#hero-paragraph-background-color', start: 'top 45%', end: '100px top', scrub: 1,
			},
		})

		gsap.fromTo('#firstProjetImage', {
			translateX: '-=100', autoAlpha: 0,
		}, {
			translateX: '0', autoAlpha: 1, duration: .4, ease: 'ease', scrollTrigger: {
				trigger: '#hero-paragraph-background-color', start: '50% 55%', end: 'bottom 55%', scrub: 1,
			},
		})

		gsap.fromTo('#firstProjectDetails', {
			translateY: '-=50', autoAlpha: 0,
		}, {
			translateY: 0, autoAlpha: 1, duration: .4, ease: 'back', stagger: .1, scrollTrigger: {
				trigger: '#hero-paragraph-background-color', start: '50% 55%', end: 'bottom 55%', scrub: 1,
			},
		})

		gsap.fromTo('#third-section-paragraph-background-color', {
			width: 0,
		}, {
			width: '90%', ease: 'back', duration: .4, scrollTrigger: {
				trigger: '#third-section-paragraph-background-color', start: 'top 70%', end: '100px top', scrub: 1,
			},
		})

		gsap.fromTo('#skillCategory', {
			autoAlpha: 0, translateX: '-=50',
		}, {
			autoAlpha: 1, translateX: '0', duration: .4, ease: 'back', stagger: .2, scrollTrigger: {
				trigger: '#skillCategory', start: 'top 70%', end: 'bottom 40%', scrub: 1,
			},
		})
	}, [])

	const skills = ['SWIFT', 'TypeScript', 'JavaScript', 'Python', 'C#', 'HTMl & CSS', 'SASS & SCSS', 'React', 'Preact', 'Next', 'Redux', 'Git', 'JWT', 'GSAP', 'SQL', 'REST API', 'Node', 'Vite', 'Spline', 'Figma']

	return (<>
		<SEO
			title={'home'}
			description={`I'm Artur, ${myAge} old student. I'm a passionate programmer and web designer.`}
			path={'/'}
		/>

		<main className={styles.mainContainer}>
			<section className={styles.heroContainer}>
				<div id={'orange-circle-1'} className={styles.orangeCircleFirst}/>
				<h1>rok<br className={styles.headingSeparator}/>artur</h1>
				<div id={'bounce-ball'} className={styles.mouse}/>
			</section>

			<section className={styles.secondSection}>
				<div className={styles.secondSectionText}>
					<div id={'hero-paragraph-background-color'} className={styles.showParagraph}/>
					<h2>my first big project</h2>
				</div>

				<div className={styles.secondSectionFirstProject}>
					<CustomImage
						className={styles.secondSectionFirstProjectImage}
						id={'firstProjetImage'}
						source={nethizer1}
						width={720}
						height={384}
					/>

					<div className={styles.secondSectionFirstProjectDetails}>
						<h3 id={'firstProjectDetails'}>
							Nethizer
						</h3>

						<p id={'firstProjectDetails'} className={styles.secondSectionFirstProjectDetailsDescription}>
							Project for my friend. Written for the first time in React technology and designed by me in
							Figma.
						</p>

						<p id={'firstProjectDetails'} className={styles.secondSectionFirstProjectDetailsDate}>
							April 29, 2022
						</p>

						<div id={'firstProjectDetails'} className={styles.secondSectionFirstProjectActions}>
							<a className={styles.secondSectionLinks}
								 href={'https://www.figma.com/file/ZFVCu7wBQwCggt84ISD4Qf/nethizer?node-id=0%3A1&t=EvtgvVL5MI0K2krK-1'}
								 target={'_blank'}>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M10.0001 1.66663H7.22504C5.6917 1.66663 4.45007 2.90829 4.45007 4.44163C4.45007 5.97496 5.6917 7.21663 7.22504 7.21663H10.0001V1.66663Z"
										fill="#FE481C"/>
									<path opacity="0.4"
												d="M10.0001 7.2251H7.22504C5.6917 7.2251 4.45007 8.46677 4.45007 10.0001C4.45007 11.5334 5.6917 12.7751 7.22504 12.7751H10.0001V7.2251Z"
												fill="#FE481C"/>
									<path
										d="M10.0001 12.7749H7.22504C5.6917 12.7749 4.45007 14.0166 4.45007 15.5499C4.45007 17.0832 5.6917 18.3249 7.22504 18.3249C8.75837 18.3249 10.0001 17.0832 10.0001 15.5499V12.7749Z"
										fill="#FE481C"/>
									<path opacity="0.4"
												d="M10 1.66663H12.775C14.3083 1.66663 15.55 2.90829 15.55 4.44163C15.55 5.97496 14.3083 7.21663 12.775 7.21663H10V1.66663Z"
												fill="#FE481C"/>
									<path
										d="M12.775 7.2251C14.3083 7.2251 15.55 8.46677 15.55 10.0001C15.55 11.5334 14.3083 12.7751 12.775 12.7751C11.2417 12.7751 10 11.5334 10 10.0001C10 8.46677 11.2417 7.2251 12.775 7.2251Z"
										fill="#FE481C"/>
								</svg>

								Design in Figma
							</a>

							<a className={styles.secondSectionLinks} href={'https://nethizer.pl'} target={'_blank'}>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.4"
												d="M6.37493 17.4249C6.34993 17.4249 6.31659 17.4416 6.29159 17.4416C4.67493 16.6416 3.35826 15.3166 2.54993 13.6999C2.54993 13.6749 2.56659 13.6416 2.56659 13.6166C3.58326 13.9166 4.63326 14.1416 5.67493 14.3166C5.85826 15.3666 6.07493 16.4082 6.37493 17.4249Z"
												fill="#FE481C"/>
									<path opacity="0.4"
												d="M17.45 13.7082C16.625 15.3666 15.25 16.7082 13.575 17.5166C13.8916 16.4582 14.1583 15.3916 14.3333 14.3166C15.3833 14.1416 16.4166 13.9166 17.4333 13.6166C17.425 13.6499 17.45 13.6832 17.45 13.7082Z"
												fill="#FE481C"/>
									<path opacity="0.4"
												d="M17.5166 6.42494C16.4666 6.10828 15.4083 5.84994 14.3333 5.66661C14.1583 4.59161 13.9 3.52494 13.575 2.48328C15.3 3.30828 16.6916 4.69994 17.5166 6.42494Z"
												fill="#FE481C"/>
									<path opacity="0.4"
												d="M6.37494 2.57493C6.07494 3.59159 5.85828 4.62493 5.68328 5.67493C4.60828 5.84159 3.54161 6.10826 2.48328 6.42493C3.29161 4.74993 4.63328 3.37493 6.29161 2.54993C6.31661 2.54993 6.34994 2.57493 6.37494 2.57493Z"
												fill="#FE481C"/>
									<path
										d="M12.9083 5.49163C10.975 5.27496 9.02501 5.27496 7.09167 5.49163C7.30001 4.34996 7.56667 3.20829 7.94167 2.10829C7.95834 2.04163 7.95001 1.99163 7.95834 1.92496C8.61667 1.76663 9.29167 1.66663 10 1.66663C10.7 1.66663 11.3833 1.76663 12.0333 1.92496C12.0417 1.99163 12.0417 2.04163 12.0583 2.10829C12.4333 3.21663 12.7 4.34996 12.9083 5.49163Z"
										fill="#FE481C"/>
									<path
										d="M5.49163 12.9083C4.34163 12.7 3.20829 12.4333 2.10829 12.0583C2.04163 12.0417 1.99163 12.05 1.92496 12.0417C1.76663 11.3833 1.66663 10.7083 1.66663 10C1.66663 9.30001 1.76663 8.61667 1.92496 7.96667C1.99163 7.95834 2.04163 7.95834 2.10829 7.94167C3.21663 7.57501 4.34163 7.30001 5.49163 7.09167C5.28329 9.02501 5.28329 10.975 5.49163 12.9083Z"
										fill="#FE481C"/>
									<path
										d="M18.3333 10C18.3333 10.7083 18.2333 11.3833 18.075 12.0417C18.0083 12.05 17.9583 12.0417 17.8916 12.0583C16.7833 12.425 15.65 12.7 14.5083 12.9083C14.725 10.975 14.725 9.02501 14.5083 7.09167C15.65 7.30001 16.7916 7.56667 17.8916 7.94167C17.9583 7.95834 18.0083 7.96667 18.075 7.96667C18.2333 8.62501 18.3333 9.30001 18.3333 10Z"
										fill="#FE481C"/>
									<path
										d="M12.9083 14.5083C12.7 15.6583 12.4333 16.7916 12.0583 17.8916C12.0417 17.9583 12.0417 18.0083 12.0333 18.075C11.3833 18.2333 10.7 18.3333 10 18.3333C9.29167 18.3333 8.61667 18.2333 7.95834 18.075C7.95001 18.0083 7.95834 17.9583 7.94167 17.8916C7.57501 16.7833 7.30001 15.6583 7.09167 14.5083C8.05834 14.6166 9.02501 14.6916 10 14.6916C10.975 14.6916 11.95 14.6166 12.9083 14.5083Z"
										fill="#FE481C"/>
									<path
										d="M13.1361 13.1361C11.0518 13.399 8.9481 13.399 6.86385 13.1361C6.60088 11.0518 6.60088 8.9481 6.86385 6.86385C8.9481 6.60088 11.0518 6.60088 13.1361 6.86385C13.399 8.9481 13.399 11.0518 13.1361 13.1361Z"
										fill="#FE481C"/>
								</svg>

								Website
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.thirdSection}>
				<div className={styles.thirdSectionText}>
					<div id={'third-section-paragraph-background-color'} className={styles.showParagraph}/>
					<h4>what are my skills?</h4>
				</div>

				<div className={styles.thirdSectionSkillsList}>
					<div id={'skillCategory'} className={styles.skillsCategory}>
						<div className={styles.skillsList}>
							{skills.map(skill => (<div id={'skill'} className={styles.secondSectionLinks}>
									{skill}
								</div>))}
						</div>
					</div>
				</div>
			</section>
		</main>
	</>)
}

export default Home
