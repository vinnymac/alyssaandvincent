import React from 'react'
import Link from 'gatsby-link'
import styles from './Footer.module.scss'
import config from '../../../config/SiteConfig'

export default class Footer extends React.Component {
	render() {
		return (
			<footer className={styles.footer}>
				{config.copyright} <a href="https://vincenttaverna.com">Vincent Taverna</a>
			</footer>
		)
	}
}
