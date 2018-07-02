import React from 'react';
import PropTypes from 'prop-types';

import { ChatteryBubble } from './ChatteryBubble';

class ChatteryWindow extends React.Component {
	constructor(props) {
		super(props);
		this.chatWindow = React.createRef();
	}

	componentDidMount() {
		this.scrollBottom();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		this.scrollBottom();
	}

	scrollBottom = () => {
		const chatWindow = this.chatWindow.current;
		chatWindow.scrollTop = chatWindow.scrollHeight;
	}

	render() {
		return (
			<div className="chattery-window-container">
				<div className="chattery-window" ref={this.chatWindow}>
					{this.props.messages.map((message, index) => (
						<ChatteryBubble
							key={message.content.substring(0,20) + index}
							createdDate={message.createdDate}
							senderUsername={message.senderUsername}
							isSeen={false}
							isFromMe={message.isFromMe}
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
}

export { ChatteryWindow };