import styles from './Scrollbar.module.css';

function Scrollbar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
        </div>
    )
}
export default Scrollbar;