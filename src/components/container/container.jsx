import styles from './container.module.scss'

const Container = ({ children, gap, paddingZero = false }) => (
	<div className={`${styles.container}${paddingZero ? ` ${styles.containerPaddingZero}` : ''}`}
			 style={gap && { gap: `${gap}px` }}
	>
		{children}
	</div>
)

export default Container
