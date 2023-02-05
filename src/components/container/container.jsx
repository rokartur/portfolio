import styles from "./container.module.scss";

const Container = ({ children, gap, paddingZero = false }) => {
    return (
        <div className={`${styles.container} ${paddingZero ? styles.containerPaddingZero : null}`}
             style={gap && { gap: `${gap}px` }}
        >
            {children}
        </div>
    );
}

export default Container;
