import styles from "./userCard.module.scss"

export function UserCard() {
    return (
        <div className={styles.card}>
            <img src="https://avatars.githubusercontent.com/u/85656946?v=4" alt="avatar" />
            <div className={styles.name}>Isaque<strong>Alcantara</strong></div>
            <p>Desenvolvedor web | UI Design</p>
        </div>
    )
}