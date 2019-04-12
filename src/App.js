import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Posts from './Components/Posts';
import { Form } from './Components/Form';
import './bootstrap.min.css';

class App extends Component {
	state = {
		posts: [],
		domain: ''
	};

	fetchPosts = (url) => {
		fetch(url).then((response) => response.json()).then((response) => {
			this.setState({
				posts: response
			});
		});
	};

	postsURL = (url, showPosts) => {
		let postsURL = `${url}wp-json/wp/v2/posts?per_page=${showPosts}`;
		this.setState({ domain: url });
		this.fetchPosts(postsURL);
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<Form postsURL={this.postsURL} />
					<Posts posts={this.state.posts} domain={this.state.domain} />
				</div>
			</div>
		);
	}
}

export default App;
