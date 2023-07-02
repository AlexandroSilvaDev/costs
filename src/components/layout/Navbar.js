import React from "react"
import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar()
{
    return (
        <nav className={styles.navbar}>
           <Container>
                <Link exact to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link exact to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link exact to="/Projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link exact to="/NewProject">Novo Projeto</Link>
                    </li>
                    <li className={styles.item}>
                        <Link exact to="/Company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link exact to="/Contact">Contato</Link>
                    </li>
                </ul>
           </Container>
        </nav>
    )
}

export default Navbar