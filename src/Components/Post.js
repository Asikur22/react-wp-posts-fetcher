import React from 'react';

class SinglePost extends React.Component {
	render() {
		let { post: { link, title } } = this.props;
		return (
			<article className="xiong-block">
				<a href={link} target="_blank" rel="noopener noreferrer">
					<h3>{title.rendered}</h3>
				</a>
			</article>
		);
	}
}

export default SinglePost;
