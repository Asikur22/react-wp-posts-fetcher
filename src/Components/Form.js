import React, { Component } from 'react';

export class Form extends Component {
	state = {
		domain: '',
		showPosts: ''
	};

	domains = {
		'asique.net': 'https://asique.net/',
		'greenlifeit.com': 'https://greenlifeit.com/'
	};

	onSubmit = (event) => {
		event.preventDefault();

		let domain = event.target.domain.value;
		let showPosts = event.target.showPosts.value;
		if (domain && showPosts) {
			this.props.postsURL(domain, showPosts);
			this.setState({ domain: '', showPosts: '' });
		}
	};

	onChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		let n = [];
		for (let i = 1; i <= 20; i++) {
			n.push(
				<option key={i} value={i}>
					{i}
				</option>
			);
		}

		let { domains } = this;

		return (
			<form onSubmit={this.onSubmit}>
				<div className="row">
					<div className="col-6">
						<label htmlFor="domain">Select Domain: </label>
						<select name="domain" id="domain" onChange={this.onChange} className="form-control">
							{Object.keys(domains).map(function(key) {
								return (
									<option key={key} value={domains[key]}>
										{key}
									</option>
								);
							})}
						</select>
					</div>
					<div className="col-6">
						<label style={{ marginLeft: '20px' }} htmlFor="showPosts">
							Show Posts:{' '}
						</label>
						<select name="showPosts" id="showPosts" onChange={this.onChange} className="form-control">
							{n}
						</select>
					</div>
					<div className="col-12 mt-3">
						<button type="submit" className="btn btn-primary btn-block w-50 mx-auto">
							Get Posts
						</button>
					</div>
				</div>
			</form>
		);
	}
}

export default Form;
