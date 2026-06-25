import styles from "./game.module.css";

interface gameFrameProps {
    src: string;
    name: string;
    x?: number;
    y?: number;
}

export default function Game({ src, name, x, y }: gameFrameProps) {
    return (
        <div className={styles.gameContainer}>
            <h2 className={styles.gameTitle}>{name}</h2>
            <div className={styles.game}>
                <iframe src={src} width={1000} height={600} style={{x: x, y: y}} sandbox="allow-scripts allow-forms allow-same-origin" className={styles.gameFrame}></iframe>
            </div>
        </div>
    );
}