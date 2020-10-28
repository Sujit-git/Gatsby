import React from 'react'
import { Link } from 'gatsby'
import Styles from './about.module.scss'
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently teach full-time on Udemy.</p>
            <p className={Styles.link}><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage