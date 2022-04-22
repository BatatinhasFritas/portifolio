import { useState } from 'react';
import styles from './header.module.scss';

export function Header({theme, setTheme}) {

    const [darkThemeIcon, setDarkThemeIcon ] = useState('/Dark-theme-icon.svg');
    const [mobileNavState, SetMobileNavState] = useState('')

    function switchTheme() {
        if (theme == 'light-theme') {
            setTheme('dark-theme');
            setDarkThemeIcon('/dark-theme-icon-active.svg');

        } else if ((theme == 'dark-theme')) {
            setTheme('light-theme');
            setDarkThemeIcon('/Dark-theme-icon.svg');

        }
    }

    return (
        <header className={styles.header + " " + styles['activate-header']}  id='header'>
            <div className={styles.container}>

                <div 
                className={styles['mobile-menu']} 
                onClick={() => {
                    if ( mobileNavState == "" ) {
                        SetMobileNavState(styles[`activate-nav-bar`])
                    } else {
                        SetMobileNavState('')
                    }
                }}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <a href='#' className={styles.logotipo} onClick={ () => SetMobileNavState('') }>
                    Isaque
                    <span>Alcantara</span>
                </a>

                <nav className={mobileNavState}>
                    <a href="#skills" id='nav-skills' onClick={ () => SetMobileNavState('') }>Skills</a>
                    {/* <a href="#" id='nav-projects' onClick={ () => SetMobileNavState('') }>Projetos</a> */}
                    <a href="#schooling" id='nav-schooling' onClick={ () => SetMobileNavState('') }>Cursos</a>
                    <a href="#contact" id='nav-contact' onClick={ () => SetMobileNavState('') }>Contato</a>
                </nav>

                <button 
                className={styles['dark-theme-button']}
                onClick={switchTheme}
                >
                    <img id='dark-theme-icon' src={darkThemeIcon} alt="botão de tema escuro"/>
                </button>
            </div>
        </header>
    );
}