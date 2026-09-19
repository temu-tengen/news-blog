import styles from "./page.module.css";
import Game from "../components/game";

export default function Games() {
    return (
        <div className={styles.page}>
            <h1 className="pageTitle">Games</h1>
            <Game src="https://microstudio.dev" name="MicroStudio"></Game>
            <Game src="https://spam-racing.surge.sh" name="Spam Racing"></Game>
            <Game src="https://zombie-sh.surge.sh" name="Zombie Apocalypse"></Game>
            
        </div>
    );
}
