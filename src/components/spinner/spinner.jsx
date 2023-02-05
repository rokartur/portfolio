import styles from "./spinner.module.scss"

const Spinner = () => {
    return (
        <svg
            className={styles.spinner}
            viewBox={"0 0 100 100"}
            width={"50"}
            height={"50"}
        >
            <circle
                className={styles.path}
                fill={"none"}
                stroke={"#DB0008"}
                cx={"50"} cy={"50"} r={"45"}
                strokeLinecap={"round"}
                strokeWidth={"10px"}
            />
        </svg>
    );
}

export default Spinner;