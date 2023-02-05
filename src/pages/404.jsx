import styles from "../styles/code.module.scss";

import SEO from "../components/seo/seo.jsx";
import scrollToTop from "../utils/scrollToTop.jsx";

const NotFound = () => {
    scrollToTop()

    return (
        <>
            <SEO
                title={"Nie znaleziono strony"}
                description={"Nie odnaleziono strony o podanym adresie"}
                path={"/404"}
            />

            <main className={styles.container}>
                <h1 className={styles.code}>
                    404
                </h1>

                <p className={styles.content}>
                    Opps! Nie znaleziono storny
                </p>

                <a className={styles.backButton} href={"/"}>
                    Wróć do strony głównej
                </a>
            </main>
        </>
    );
}

export default NotFound;
