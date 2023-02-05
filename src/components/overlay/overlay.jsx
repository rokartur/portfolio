import styles from "./overlay.module.scss";

const Overlay = ({ children }) => {
    return (
        <main className={styles.overlay}>
            {children}
        </main>
    );
}

export default Overlay;
