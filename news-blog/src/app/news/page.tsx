import styles from "./page.module.css";
import Article from "../components/article";

export default function News() {
    return (
        <div className={styles.page}>
            <h1 className="pageTitle">News</h1>

            <div className={styles.articlesContainer}>
                <Article title="Welcome" content="Welcome to news-site! As of our 0.01 update we have a home, news and games tab. Our newly added games include spam-racer, and we also added a microstudio iframe. " author="Shalin Mehta" email="N/A" date="6/25/26" imageSrc="https://i.ibb.co/S4gG1HD0/IMG-0125.webp"></Article>
                <Article title="Release 0.01" content="This is a post to commemorate the first release of our site." author="Shalin Mehta" email="N/A" date="6/25/26"></Article> 
            </div>
        </div>
    );
}