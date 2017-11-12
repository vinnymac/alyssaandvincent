/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react'
import favicon from './favicon.png'
import appleTouchIcon from './apple-touch-icon.png'
import favicon32by32 from './favicon-32x32.png'
import favicon16by16 from './favicon-16x16.png'
import safariPinnedTab from './safari-pinned-tab.svg'

const config = require('../config/SiteConfig')

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
	try {
		/* eslint import/no-webpack-loader-syntax: off */
		inlinedStyles = require('!raw-loader!../public/styles.css')
	} catch (e) {
		/* eslint no-console: "off" */
		console.log(e)
	}
}

export default class HTML extends React.Component {
	render() {
		let css
		if (process.env.NODE_ENV === 'production') {
			css = (
				<style
					id="gatsby-inlined-css"
					dangerouslySetInnerHTML={{ __html: inlinedStyles }}
				/>
			)
		}

		return (
			<html lang={config.siteLanguage}>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale = 1.0, maximum-scale=1.0"
					/>
					{this.props.headComponents}
					<link rel="shortcut icon" href={favicon} />
					<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href={favicon32by32}
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href={favicon16by16}
					/>
					<link
						rel="mask-icon"
						href={safariPinnedTab}
						color={config.themeColor}
					/>
					<meta name="theme-color" content={config.themeColor} />
					{css}
				</head>
				<body>
					<div
						key={'body'}
						id="___gatsby"
						dangerouslySetInnerHTML={{ __html: this.props.body }}
					/>
					{this.props.postBodyComponents}
				</body>
			</html>
		)
	}
}
