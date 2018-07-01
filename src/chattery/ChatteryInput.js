import React from 'react';
import PropTypes from 'prop-types';

class ChatteryInput extends React.Component {
	state = {
		inputValue: ''
	}

	onChange = (event) => {
		this.setState({
			inputValue: event.target.value
		})
	}

	onSubmit = (event) => {
		event.preventDefault();
		const { inputValue } = this.state;
		if (inputValue !== '') {
			const message = {
				content: inputValue,
				sender: 'Emin',
				createdDate: new Date()
			}
			this.setState({
				inputValue: ''
			}, () => this.props.onNewMessage(message));
		}
	}

	render() {
		return (
			<div className="chattery-inputform-container">
				<form
					className="chattery-inputform"
					autoComplete="off"
					onSubmit={this.onSubmit}
				>
	        <input autoFocus type="text" className="chattery-input" value={this.state.inputValue} onChange={this.onChange} />
	        <input type="submit" className="chattery-submitbutton" value="Send" />
	      </form>
	    </div>
		)
	}
}

ChatteryInput.propTypes = {
	onNewMessage: PropTypes.func.isRequired
}

export { ChatteryInput };