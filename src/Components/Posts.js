import React, { Component } from 'react';
import Post from './Post';

export class Posts extends Component {
	render() {
		let { posts, loading, domain } = this.props;
		let postLoop = posts.map((post, index) => {
			return <Post key={index} post={post} />;
		});
		// return <div>{postLoop}</div>;

		if (posts.length === 0 || loading) {
			if (loading) {
				return (
					<h2>
						Loading Post form{' '}
						{domain !== null && domain.label === domain.value ? (
							domain.label
						) : (
							`${domain.label} (${domain.value})`
						)}
					</h2>
				);
			} else {
				return <h2>Plz Select or add you domain.</h2>;
			}
		} else {
			return (
				<React.Fragment>
					<h2>
						{posts.length} Posts from{' '}
						{domain.label === domain.value ? domain.label : `${domain.label} (${domain.value})`}
					</h2>
					<div>{postLoop}</div>
				</React.Fragment>
			);
		}
	}
}

export default Posts;
