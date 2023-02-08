import styles from "../styles/aboutme.module.scss";

import {useEffect} from "react";

import {gsap} from "gsap";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import relativeTime from "dayjs/plugin/relativeTime"

import SEO from "../components/seo/seo.jsx";
import scrollToTop from "../utils/scrollToTop.jsx";

const AboutMe = () => {
    scrollToTop()

    dayjs.extend(relativeTime)
    const myAge = dayjs("2004-02-05").toNow(true)

    useEffect(() => {
        gsap.fromTo(
            "#aboutMeItem",
            {
                translateX: "-=50",
                opacity: 0,
                scale: .8,
            },
            {
                translateX: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                ease: "back",
                stagger: .1,
            });

        gsap.fromTo(
            "#aboutMeLink",
            {
                translateY: "+=50",
                opacity: 0,
                scale: .8,
            },
            {
                translateY: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                ease: "back",
                delay: .4,
                stagger: .1,
            });

        return () => scrollToTop()
    }, []);


    return (
        <>
            <SEO
                title={"about me"}
                description={`I'm Artur, ${myAge} old student. I'm a passionate programmer and web designer.`}
                path={"/about-me"}
            />

            <main className={styles.mainContainer}>
                <section className={styles.text}>
                    <p className={styles.overline}
                       id={"aboutMeItem"}
                    >
                        A few words
                    </p>

                    <h1 className={styles.heading}
                        id={"aboutMeItem"}
                    >
                        About me
                    </h1>

                    <p className={styles.supportingText}
                       id={"aboutMeItem"}
                    >
                        I'm Artur, {myAge} old student. I'm a passionate programmer and web designer. I started programming at the end of 2018.
                        Furthermore, I'm a perfectionist, I try very hard to take care of the details of my works.
                        I'm not afraid to take on new challenges!
                    </p>
                </section>

                <section className={styles.waysToContactMe}>
                    <h2 className={styles.secondHeading}
                        id={"aboutMeItem"}
                    >
                        choose <span style={{ color: "#FE481C" }}>your</span> way to contact me
                    </h2>

                    <div className={styles.aboutMeLinks}>
                        <a className={styles.aboutMeLink}
                           id={"aboutMeLink"}
                           href={"https://www.linkedin.com/in/artur-rok-800360249/"}
                           target={"_blank"}
                        >
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.75471 9.01895C6.75471 7.56009 7.93736 6.37744 9.39622 6.37744H22.9811C24.44 6.37744 25.6226 7.56009 25.6226 9.01895V22.6039C25.6226 24.0627 24.44 25.2454 22.9811 25.2454H9.39622C7.93736 25.2454 6.75471 24.0627 6.75471 22.6039V9.01895Z" fill="white"/>
                                    <path d="M13.5472 11.4718C13.5472 12.4096 12.7869 13.1699 11.8491 13.1699C10.9112 13.1699 10.1509 12.4096 10.1509 11.4718C10.1509 10.5339 10.9112 9.77367 11.8491 9.77367C12.7869 9.77367 13.5472 10.5339 13.5472 11.4718Z" fill="black"/>
                                    <path d="M10.5283 14.302C10.5283 14.0936 10.6972 13.9246 10.9057 13.9246H12.7925C13.0009 13.9246 13.1698 14.0936 13.1698 14.302V21.4718C13.1698 21.6802 13.0009 21.8491 12.7925 21.8491H10.9057C10.6972 21.8491 10.5283 21.6802 10.5283 21.4718V14.302Z" fill="black"/>
                                    <path d="M14.6792 13.9246L16.3774 13.9246C16.5858 13.9246 16.7547 14.0936 16.7547 14.302V14.6793C17.5094 13.7359 18.8931 13.673 19.5849 13.7359C21.7416 13.932 22.1006 16.1259 22.0377 17.3208L22.0377 21.4718C22.0377 21.6802 21.8688 21.8491 21.6604 21.8491L19.9623 21.8491C19.7539 21.8491 19.5849 21.6802 19.5849 21.4718V17.3208C19.522 16.8177 19.1698 15.8114 18.2642 15.8114C17.3585 15.8114 16.8176 16.9435 16.7547 17.3208V21.4718C16.7547 21.6802 16.5858 21.8491 16.3774 21.8491L14.6792 21.8491C14.4708 21.8491 14.3019 21.6802 14.3019 21.4718V14.302C14.3019 14.0936 14.4708 13.9246 14.6792 13.9246Z" fill="black"/>
                                </svg>
                            </span>
                            Linkedin
                        </a>

                        <a className={styles.aboutMeLink}
                           id={"aboutMeLink"}
                           href={"mailto:rokartur520@gmail.com"}
                           target={"_blank"}
                        >
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.6667 22.2335H12.3333C10.1333 22.2335 8.66667 21.1335 8.66667 18.5668V13.4335C8.66667 10.8668 10.1333 9.76685 12.3333 9.76685H19.6667C21.8667 9.76685 23.3333 10.8668 23.3333 13.4335V18.5668C23.3333 21.1335 21.8667 22.2335 19.6667 22.2335Z" fill="black"/>
                                    <path d="M16 16.6381C15.384 16.6381 14.7607 16.4475 14.284 16.0588L11.9887 14.2255C11.754 14.0348 11.71 13.6901 11.9007 13.4555C12.0914 13.2208 12.436 13.1768 12.6707 13.3675L14.966 15.2008C15.5234 15.6481 16.4694 15.6481 17.0267 15.2008L19.322 13.3675C19.5567 13.1768 19.9087 13.2135 20.092 13.4555C20.2827 13.6901 20.246 14.0421 20.004 14.2255L17.7087 16.0588C17.2394 16.4475 16.616 16.6381 16 16.6381Z" fill="white"/>
                                </svg>
                            </span>

                            Email
                        </a>

                        <a className={styles.aboutMeLink}
                           id={"aboutMeLink"}
                           href={"https://t.me/rokartur"}
                           target={"_blank"}
                        >
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.24253 15.8312C11.9069 13.799 15.0171 12.4593 16.5734 11.812C21.0167 9.96384 21.94 9.64279 22.5418 9.63219C22.6742 9.62986 22.9701 9.66266 23.1618 9.81821C23.3237 9.94956 23.3682 10.127 23.3895 10.2515C23.4109 10.376 23.4374 10.6597 23.4163 10.8814C23.1755 13.4114 22.1336 19.5509 21.6036 22.3846C21.3793 23.5836 20.9377 23.9856 20.5101 24.0249C19.581 24.1104 18.8754 23.4109 17.9755 22.821C16.5673 21.8979 15.7717 21.3232 14.4048 20.4225C12.8251 19.3815 13.8492 18.8093 14.7494 17.8743C14.985 17.6296 19.0789 13.9059 19.1581 13.5681C19.168 13.5258 19.1772 13.3684 19.0837 13.2852C18.9901 13.2021 18.8521 13.2305 18.7524 13.2531C18.6112 13.2852 16.3615 14.7721 12.0035 17.7139C11.365 18.1523 10.7866 18.366 10.2684 18.3548C9.69711 18.3424 8.59819 18.0318 7.78125 17.7662C6.77925 17.4405 5.98288 17.2683 6.05223 16.7152C6.08835 16.427 6.48512 16.1324 7.24253 15.8312Z" fill="black"/>
                                </svg>
                            </span>

                            Telegram
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}

export default AboutMe;
