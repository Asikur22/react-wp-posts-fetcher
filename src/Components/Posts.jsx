import React, { Component } from "react";
import Post from "./Post";

export class Posts extends Component {
	render() {
		let { posts, loading, domain } = this.props;
		let postLoop = posts.map((post, index) => {
			return <Post key={index} post={post} />;
		});

		if (posts.length === 0 || loading) {
			if (loading) {
				return (
					<h2>
						Loading posts
						{domain !== null ? " form " + domain : ""}
					</h2>
				);
			}
		} else {
			return (
				<React.Fragment>
					<h2>
						{posts.length} Posts {domain !== null ? " form " + domain : ""}
					</h2>
					<div className="mb-5">{postLoop}</div>
				</React.Fragment>
			);
		}
	}
}

export default Posts;
