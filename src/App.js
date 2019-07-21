import React, { Component } from 'react';
import axios from 'axios';

import Header from './Components/Header';
import Form from './Components/Form';
import Posts from './Components/Posts';

import './bootstrap.min.css';
import './App.css';

class App extends Component {
	state = {
		posts   : [],
		domain  : null,
		loading : null
	};

	postsURL = (urls, showPosts) => {
		let url = urls.value;
		let postsURL = `${url}wp-json/wp/v2/posts?per_page=${showPosts}`;
		this.setState({
			domain  : urls,
			loading : true
		});

		// Fetch Post from final URL.
		axios
			.get(postsURL)
			.then((res) =>
				this.setState({
					posts   : res.data,
					loading : false
				})
			)
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<Form postsURL={this.postsURL} />
					<Posts posts={this.state.posts} domain={this.state.domain} loading={this.state.loading} />
				</div>
			</div>
		);
	}
}

export default App;
