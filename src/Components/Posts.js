import React, { Component } from 'react';
import SinglePost from './SinglePost';

export class Posts extends Component {
	render() {
		return (
			<div>
				{this.props.posts[0] ? <h1>Some Post from {this.props.domain}</h1> : ''}
				<SinglePost posts={this.props.posts} />
			</div>
		);
	}
}

export default Posts;
