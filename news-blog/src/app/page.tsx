import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.page}>
        <h1 className="pageTitle">Home</h1>
        <p className={styles.bodyText}>Welcome to news-site.</p>
      </div>
    </div>
  );
}
