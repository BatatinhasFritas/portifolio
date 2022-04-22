import Styles from "./schooling.module.scss";

export default function Schooling() {
    return (
        <section className={Styles.container} id="schooling">
            <h2>Meus Cursos</h2>
            <div className={Styles["cursos-container"]}>
                <div className={Styles.curso}>
                    <img src="/ifs-logo.png" alt="logotipo do Instituto Federal de Sergipe" />
                    <p>Cursei o ensino <strong>médio</strong> e o <strong>técnico em eletrônica</strong> pelo <strong>IFS</strong>(instituto federal de Sergipe).</p>
                </div>
                <div className={Styles.curso}>
                    <img src="/rocketseat-logo.png" alt="logotipo da Rocketseat" />
                    <p>Aprendi a base do <strong>desenvolvimento de aplicações web</strong> com a plataforma da <strong>Rocketseat</strong> através do <strong>Discover</strong> e as lives educativas no YouTube.</p>
                </div>
            </div>
        </section>
    )
}