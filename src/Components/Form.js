import React, { Component } from 'react';
import Creatable from 'react-select/lib/Creatable';
import isUrl from 'is-url';

const options = [
	{ label: 'Localhost', value: 'http://localhost:3000/' },
	{ label: 'Asique', value: 'https://asique.net/' },
	{ label: 'Green Life IT', value: 'https://greenlifeit.com/' },
	{ label: 'Paira Studios', value: 'https://www.pairastudios.com/' }
];

export class Form extends Component {
	state = {
		domain    : null,
		showPosts : '5'
	};

	onSubmit = (event) => {
		event.preventDefault();

		let { domain, showPosts } = this.state;
		if (domain && isUrl(domain.value) && showPosts) {
			if (domain.value.substr(-1) !== '/') {
				domain.value += '/';
			}
			this.props.postsURL(domain, showPosts);
			this.setState({ domain: '' });
		} else {
			alert('Please Add a Valid URL');
		}
	};

	onChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleChange = (domain) => {
		this.setState({ domain });
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

		const { domain } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<div className="row">
					<div className="col-6">
						<label htmlFor="domain">Select Domain: </label>
						<Creatable
							name="domain"
							id="domain"
							value={domain}
							onChange={this.handleChange}
							options={options}
							autoFocus={true}
							isSearchable={true}
						/>
						<small>You can add custom WordPress site url. Like (http://yoursite.com/)</small>
					</div>
					<div className="col-6">
						<label style={{ marginLeft: '20px' }} htmlFor="showPosts">
							Show Posts:{' '}
						</label>
						<select
							value={this.state.showPosts}
							name="showPosts"
							id="showPosts"
							onChange={this.onChange}
							className="form-control"
						>
							{n}
						</select>
					</div>
					<div className="col-12 mt-3 mb-5">
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
