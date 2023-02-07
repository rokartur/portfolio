import styles from "../styles/selectedProject.module.scss";

import {useState} from "react";
import Match from "preact-router/match";
import Carousel from "framer-motion-carousel";

import SEO from "../components/seo/seo.jsx";
import CustomImage from "../components/customImage/customImage.jsx";

import projectsData from "../data/projects.data.jsx";

const SelectedProject = () => {
    const [path, setPath] = useState("");
    const [projectIndex, setProjectIndex] = useState(0);

    const pathID = path.charAt(path.length - 1);

    projectsData.findIndex((element, index) => {
        if (element.id === Number(pathID)) {
            setProjectIndex(index)
        }
    })

    const project = projectsData[Number(projectIndex)]

    const str = "" + project.id
    const pad = "00"
    const ans = pad.substring(0, pad.length - str.length) + str + "."

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
                                <p>
                                    {project.type}
                                </p>

                                <h1>
                                    {project.name}
                                </h1>

                                <div className={styles.links}>
                                    <p>
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
                                                    <a  className={styles.link} href={url} target={"_blank"}>
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
                                <p className={styles.projectNumber}>
                                    {ans}
                                </p>

                                <div className={styles.projectSecondDetails}>
                                    <p>
                                        Date
                                    </p>

                                    <p>
                                        {project.date}
                                    </p>
                                </div>

                                <div className={styles.projectSecondDetails}>
                                    <p>
                                        Role
                                    </p>

                                    <p>
                                        {project.role}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className={styles.carouselContainer}>
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
