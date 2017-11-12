import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Palette from 'react-palette'
import styles from './ProjectListing.module.scss'

export default class ProjectListing extends React.PureComponent {
	getList() {
		return this.props.projectEdges.map(projectEdge => ({
			path: projectEdge.node.fields.slug,
			cover: projectEdge.node.frontmatter.cover.childImageSharp.sizes,
			client: projectEdge.node.frontmatter.client,
			location: projectEdge.node.frontmatter.location,
			venue: projectEdge.node.frontmatter.venue,
			title: projectEdge.node.frontmatter.title,
			service: projectEdge.node.frontmatter.service,
			description: projectEdge.node.frontmatter.description,
			noclick: projectEdge.node.frontmatter.noclick,
			imageURL: projectEdge.node.frontmatter.cover.childImageSharp.sizes.src
		}))
	}
	render() {
		const List = this.getList()
		return (
			<div className={styles.base}>
				{List.map((project) => {
					const headerText = project.title || project.venue || project.client
					const subText = project.description || project.service
					return (
						<div key={project.path} className={styles.wrapper}>
							<div className={styles.content}>
								<div className={styles.image}>
									<Img sizes={project.cover} />
								</div>
								{project.noclick ? (
									<Palette image={project.imageURL} />
								) : (
									<Link
										to={project.path}
										key={project.path}
										className={styles.link}
									>
										<Palette image={project.imageURL}>
											{project.noclick ? null : (
												palette => (
													<div
														className={styles.overlay}
														style={{ backgroundColor: palette.vibrant }}
													/>
												)
											)}
										</Palette>
										<h2 className={styles.client} key={headerText}>
											{headerText}
										</h2>
										<div className={styles.service} key={subText}>
											{subText}
										</div>
									</Link>
								)}
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}
