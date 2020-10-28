import React from 'react'

import Layout from "../components/layout"
import Styles from './about.module.scss' 
const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p className={Styles.link}>
                The best way to reach me is via <a href="https://twitter.com/SujitKhopade_" target="_blank">@SujitKhopade_</a> on Twitter!
            </p>
        </Layout>
    )
}

export default ContactPage