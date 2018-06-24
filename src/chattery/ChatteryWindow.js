import React from 'react';
import PropTypes from 'prop-types';

import { ChatteryBubble } from './ChatteryBubble';

class ChatteryWindow extends React.Component {
	render() {

		return (
			<div className="chattery-window-container">
				<div className="chattery-window">
					{this.props.messages.map((message, index) => (
						<ChatteryBubble
							key={message.content.substring(0,20) + index}
							createdDate={message.createdDate}
							sender={message.sender}
							isSeen={false}
						>
							{message.content}
						</ChatteryBubble>
					))}
				</div>
			</div>
		)
	}
}

ChatteryWindow.propTypes = {
	messages: PropTypes.array.isRequired,
	meta: PropTypes.object,
	onNewMessage: PropTypes.func.isRequired
}

export { ChatteryWindow };