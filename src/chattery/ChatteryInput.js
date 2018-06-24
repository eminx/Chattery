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
		const message = {
			content: this.state.inputValue,
			sender: 'Emin',
			createdDate: new Date()
		}
		this.props.onNewMessage(message);
	}

	render() {
		return (
			<div className="chattery-inputform-container">
				<form
					className="chattery-inputform"
					autoComplete="off"
					onSubmit={this.onSubmit}
				>
	        <input type="text" className="chattery-input" onChange={this.onChange} />
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