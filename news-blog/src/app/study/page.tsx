import Game from "../components/game";
import styles from "./page.module.css";

export default function Study() {
    return (
        <div className={styles.page}>
            <Game src="https://mathstudy.dila.cl/" name="Study (Shh)"/>
        </div>  
    );
}