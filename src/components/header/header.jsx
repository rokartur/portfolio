import styles from "./header.module.scss";

import {useCallback, useEffect, useState} from "react";
import {gsap} from "gsap";
import {Link} from "preact-router/match";
import scrollToTop from "../../utils/scrollToTop.jsx";
import useLocalStorage from "use-local-storage";

const Header = () => {
    const [size, setSize] = useState([]);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [reduceMotion] = useLocalStorage("reduceMotion");

    const updateSize = useCallback(() => {
        setSize([window.innerWidth, window.innerHeight]);
    }, [])

    useEffect(() => {
        window.addEventListener("resize", updateSize);
        updateSize()

        return () => {
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    const hamburgerAnimationOpen = () => {
        if (!reduceMotion) {
            gsap.fromTo(
                "#hamburgerNavLink",
                {
                    translateX: "-=100",
                },
                {
                    translateX: "0",
                    duration: .3,
                    ease: "back",
                    stagger: .2,
                }
            );

            gsap.to(
                "#hamburgerIconStroke1",
                {
                    x: "-=2",
                    y: "+=6",
                    width: "+=4",
                    rotate: "45deg",
                    duration: .3,
                    ease: "back",
                }
            );

            gsap.to(
                "#hamburgerIconStroke2",
                {
                    x: "-=2",
                    width: "+=4",
                    rotate: "-45deg",
                    duration: .3,
                    ease: "back",
                }
            );

            gsap.to(
                "#hamburgerIconStroke3",
                {
                    x: "+=20",
                    opacity: 0,
                    duration: .3,
                    ease: "back",
                }
            );
        }
    }

    const hamburgerAnimationClose = () => {
        if (!reduceMotion) {
            gsap.fromTo(
                "#hamburgerNavLink",
                {
                    translateX: "+=100",
                },
                {
                    translateX: 0,
                    duration: .2,
                    ease: "back",
                    stagger: .1,
                }
            );

            gsap.to(
                "#hamburgerIconStroke1",
                {width: 16, x: 0, y: 0, rotate: 0, opacity: 1, duration: .3, ease: "back"}
            );

            gsap.to(
                "#hamburgerIconStroke2",
                {width: 16, x: 0, y: 0, rotate: 0, opacity: 1, duration: .3, ease: "back"}
            );

            gsap.to(
                "#hamburgerIconStroke3",
                {width: 9, x: 0, y: 0, rotate: 0, opacity: 1, duration: .3, ease: "back"}
            );
        }
    }

    return size[0] > 500 ?
        <header className={styles.main}>
            <div className={styles.container}>
                <div className={styles.component}>
                    <div className={styles.content}>
                        <nav className={styles.links}>
                            <Link className={styles.link}
                                  activeClassName={styles.linkActive}
                                  href={"/portfolio"}
                                  onClick={() => {
                                      setHamburgerOpen(false)
                                      scrollToTop()
                                  }}>
                                Portfolio
                            </Link>

                            <Link className={styles.link}
                                  activeClassName={styles.linkActive}
                                  href={"/"}
                                  onClick={() => {
                                      setHamburgerOpen(false)
                                      scrollToTop()
                                  }}>
                                Home
                            </Link>

                            <Link className={styles.link}
                                  activeClassName={styles.linkActive}
                                  href={"/about-me"}
                                  onClick={() => {
                                      setHamburgerOpen(false)
                                      scrollToTop()
                                  }}>
                                About me
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        :
        <header className={styles.componentHamburger}>
            <button className={hamburgerOpen ? styles.hamburgerIconActive : styles.hamburgerIcon}
                    onClick={() => {
                        setHamburgerOpen(hamburgerOpen => !hamburgerOpen)
                        {hamburgerOpen ? hamburgerAnimationClose() : hamburgerAnimationOpen()}
                    }}>
                <div className={styles.hamburgerIconSVG}>
                    <div className={styles.hamburgerStroke1} id={"hamburgerIconStroke1"}/>
                    <div className={styles.hamburgerStroke2} id={"hamburgerIconStroke2"}/>
                    <div className={styles.hamburgerStroke3} id={"hamburgerIconStroke3"}/>
                </div>
                &#x200B;
            </button>

            <nav className={styles.linksHamburger}
                 id={"hamburgerNavLinks"}
                 style={hamburgerOpen ? { transform: "translateX(0)" } : { transform: "translate(500px)" }}
            >
                <Link className={styles.link}
                      id={"hamburgerNavLink"}
                      activeClassName={styles.linkActive}
                      href={"/portfolio"}
                      onClick={() => {
                          setHamburgerOpen(false)
                          scrollToTop()
                          {hamburgerOpen ? hamburgerAnimationClose() : hamburgerAnimationOpen()}
                      }}>
                    Portfolio
                </Link>

                <Link className={styles.link}
                      id={"hamburgerNavLink"}
                      activeClassName={styles.linkActive}
                      href={"/"}
                      onClick={() => {
                          setHamburgerOpen(false)
                          scrollToTop()
                          {hamburgerOpen ? hamburgerAnimationClose() : hamburgerAnimationOpen()}
                      }}>
                    Home
                </Link>

                <Link className={styles.link}
                      id={"hamburgerNavLink"}
                      activeClassName={styles.linkActive}
                      href={"/about-me"}
                      onClick={() => {
                          setHamburgerOpen(false)
                          scrollToTop()
                          {hamburgerOpen ? hamburgerAnimationClose() : hamburgerAnimationOpen()}
                      }}>
                    About me
                </Link>
            </nav>
        </header>
}

export default Header;
