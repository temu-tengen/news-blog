import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.contentDetail}>Made by Shalin Mehta</p>
            <p className={styles.contentDetail}>Contact Me At 224-370-1959 to be an author</p>
        </div>
    );
}