import React from 'react';
import PropTypes from 'prop-types';

class ChatteryBubble extends React.Component {
	render() {
		const { sender, createdDate, isFromMe, children } = this.props;
		let bubbleClass = 'talk-bubble tri-right round ';
		let bubbleClassContainer = 'talk-bubble-container ';
		if (isFromMe) {
			bubbleClass += 'left-in';
			bubbleClassContainer += 'left-in';
		} else {
			bubbleClass += 'right-in';
			bubbleClassContainer += 'right-in';
		}

		return (
			<div className={bubbleClassContainer}>
				<div className={bubbleClass}>
					<div className="talktext">
						<p className="talktext-senderinfo">{sender}</p>
						<p className="talktext-content">{children}</p>
						<p className="talktext-dateinfo">{createdDate}</p>
					</div>
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