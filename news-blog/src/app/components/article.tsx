import styles from "./article.module.css";
import Image from "next/image";

interface articleProps {
    title: string;
    content: string;
    author: string;
    email: string;
    imageSrc?: string;
    date?: string;
}
export default function Article({ title, content, author, email, imageSrc, date }: articleProps) {
    return (
        <div className={styles.articleContainer}>
            <h2 className={styles.heading}>{title}</h2>
            {imageSrc != null && (
                <Image
                    src={imageSrc}
                    alt="Image Not Loaded"
                    width={100}
                    height={100}
                    className={styles.image}
                    unoptimized={true}
                />
            )}
            <p className={styles.content}>{content}</p>

            <div className={styles.articleCredits}>
                <p className={styles.author}>By {author}</p>
                <p className={styles.author}>{date}</p>
                <p className={styles.email}>Contact Me: {email}</p>
            </div>
        </div>
    );
}