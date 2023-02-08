import styles from "../styles/selectedProject.module.scss";

import {useEffect, useState} from "react";
import Match from "preact-router/match";
import Carousel from "framer-motion-carousel";
import {gsap} from "gsap";

import SEO from "../components/seo/seo.jsx";
import CustomImage from "../components/customImage/customImage.jsx";
import scrollToTop from "../utils/scrollToTop.jsx";

import projectsData from "../data/projects.data.jsx";

const SelectedProject = () => {
    scrollToTop()

    const [path, setPath] = useState("");
    const [projectIndex, setProjectIndex] = useState(null);

    const project = projectsData[Number(projectIndex)]

    const str = "" + project.id
    const pad = "00"
    const ans = pad.substring(0, pad.length - str.length) + str + "."

    projectsData.findIndex((element, index) => {
        if (element.path === path.slice(11)) {
            setProjectIndex(index)
        }
    })

    useEffect(() => {
        scrollToTop()

        gsap.fromTo(
            "#selectedProjectElement",
            {
                translateX: "-=50",
                opacity: 0,
                scale: .8,
            },
            {
                translateX: 0,
                scale: 1,
                opacity: 1,
                duration: .4,
                ease: "back",
                stagger: .1,
            });

        return () => scrollToTop()
    }, []);

    return (
        <>
            <Match>
                {
                    ({ url }) => {setPath(url)}
                }
            </Match>

            <SEO
                title={project ? project.name : "Project doesn't exist"}
                description={"Projekt wykonany przez Artura Rok"}
                path={path}
            />

            {
                project &&
                    <main className={styles.mainContainer}>
                        <section className={styles.projectContent}>
                            <div className={styles.heading}>
                                <p id={"selectedProjectElement"}>
                                    {project.type}
                                </p>

                                <h1 id={"selectedProjectElement"}>
                                    {project.name}
                                </h1>

                                <div className={styles.links}>
                                    <p id={"selectedProjectElement"}>
                                        Links
                                    </p>

                                    <div className={styles.row}>
                                        {project.links.map(
                                            ({
                                                 name,
                                                 url,
                                                 icon
                                             }) => {
                                                return (
                                                    <a id={"selectedProjectElement"} className={styles.link} href={url} target={"_blank"}>
                                                        <span>
                                                            {icon}
                                                        </span>

                                                        {name}
                                                    </a>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.projectDetails}>
                                <p id={"selectedProjectElement"} className={styles.projectNumber}>
                                    {ans}
                                </p>

                                <div className={styles.projectSecondDetails}>
                                    <p id={"selectedProjectElement"}>
                                        Date
                                    </p>

                                    <p id={"selectedProjectElement"}>
                                        {project.date}
                                    </p>
                                </div>

                                <div className={styles.projectSecondDetails}>
                                    <p id={"selectedProjectElement"}>
                                        Role
                                    </p>

                                    <p id={"selectedProjectElement"}>
                                        {project.role}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id={"selectedProjectElement"} className={styles.carouselContainer}>
                            <Carousel
                                autoPlay
                                loop={true}
                                interval={5000}
                            >
                                {project.images.map(
                                    ({
                                         src,
                                         width,
                                         height
                                     }) => (
                                        <CustomImage
                                            className={styles.slideImage}
                                            source={src}
                                            width={width}
                                            height={height}
                                        />
                                    )
                                )}
                            </Carousel>
                        </section>
                    </main>
            }
        </>
    );
}

export default SelectedProject;
