import styles from "../styles/allProjects.module.scss";

import {gsap} from "gsap";
import {useEffect} from "react";
import SEO from "../components/seo/seo.jsx";
import CustomImage from "../components/customImage/customImage.jsx";
import scrollToTop from "../utils/scrollToTop.jsx";
import useLocalStorage from "use-local-storage";

import projectsData from "../data/projects.data.jsx";

const AllProjects = () => {
    scrollToTop()

    const [reduceMotion] = useLocalStorage("reduceMotion");

    useEffect(() => {
        if (!reduceMotion) {
            gsap.fromTo(
                "#heading",
                {
                    translateX: "-=100",
                    autoAlpha: 0,
                    scale: .8,
                },
                {
                    translateX: 0,
                    autoAlpha: 1,
                    scale: 1,
                    duration: .4,
                    ease: "back",
                });

            gsap.fromTo(
                "#project",
                {
                    translateY: "+=25",
                    autoAlpha: 0,
                    scale: .8
                },
                {
                    translateY: "0",
                    autoAlpha: 1,
                    scale: 1,
                    duration: .4,
                    ease: "back",
                    stagger: .1,
                });
        }
    }, [reduceMotion]);

    return (
        <>
            <SEO
                title={"portfolio"}
                description={"My all projects"}
                path={"/portfolio"}
            />

            <main className={styles.mainContainer}>
                <div className={styles.heading}>
                    <h1 id={"heading"}>
                        portfolio
                    </h1>
                </div>

                <div className={styles.projectsList}>
                    {projectsData.map(
                        ({
                            id,
                            name,
                            thumbnail,
                            type,
                            path
                         }) => (
                        <a key={id}
                           id={"project"}
                           className={styles.project}
                           href={`/portfolio/${path}`}
                           onClick={() => scrollToTop()}
                        >
                            <CustomImage
                                className={styles.projectImage}
                                source={thumbnail}
                                width={380}
                                height={227}
                            />

                            <div className={styles.projectDetails}>
                                <p className={styles.projectType}>
                                    {type}
                                </p>

                                <p className={styles.projectName}>
                                    {name}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </>
    );
}

export default AllProjects;
