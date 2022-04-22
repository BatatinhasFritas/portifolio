import { useState } from "react";
import styles from "./skills.module.scss";

export default function Skills({theme}) {

    return (
        <section className={styles.skills} id="skills">
            <h2>Minhas Skills</h2>
            <div className={styles["skill-icon-container"]}>
                <div className={styles["skill-container"]}>
                    <h3>front-end</h3>
                    <div className={styles["icons-container"]}>
                        <img src={`/nextjs-${theme}.svg`} alt="icone do next framework" />
                        <img src="/react.svg" alt="icone do react framework" />
                        <img src="/Sass.svg" alt="icone do sass" />
                    </div>
                </div>
                <div className={styles.bar}></div>
                <div className={styles["skill-container"]}>
                    <h3>back-end</h3>
                    <div className={styles["icons-container"]}>
                        <img src="/nodejs.svg" alt="icone do node" />
                    </div>
                </div>
                <div className={styles.bar}></div>
                <div className={styles["skill-container"]}>
                    <h3>ferramentas</h3>
                    <div className={styles["icons-container"]}>
                        <img src="/figma-icon.svg" alt="icone do figma" />
                        <img src="/trello-icon.svg" alt="icone do next framework" />
                        <img src="/git-icon.svg" alt="icone do next framework" />
                    </div>
                </div>
            </div>
        </section>
    )
}