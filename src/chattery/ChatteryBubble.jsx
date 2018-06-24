import React from 'react';
import PropTypes from 'prop-types';

class ChatteryBubble extends React.Component {
	render() {

		const bubbleClass = "talk-bubble tri-right round right-in"

		return (
			<div className={bubbleClass}>
				<div className="talktext">
					<p className="talktext-senderinfo">{this.props.sender}</p>
					<p className="talktext-content">{this.props.children}</p>
					<p className="talktext-dateinfo">{this.props.createdDate}</p>
				</div>
			</div>
		)
	}
}

ChatteryBubble.propTypes = {
	children: PropTypes.string.isRequired,
	createdDate: PropTypes.string,
	sender: PropTypes.string,
	isSeen: PropTypes.bool
}

export { ChatteryBubble };