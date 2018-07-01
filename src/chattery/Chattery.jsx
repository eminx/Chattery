import React from 'react';
import './chattery.css';

import { ChatteryWindow } from './ChatteryWindow';
import { ChatteryInput } from './ChatteryInput';

const data = {
	meta: {

	},
	messages: [
		{
			content: "Hey babe. Are you there?", 
			sender: "aXehQjieRx2C9HYiF", 
			createdDate: 'Wed Feb 15 2017 02:46:57 GMT+0100 (Central European Standard Time)',
			isFromMe: true
		}, {
			content: "I don't mean now :)", 
			sender: "aXehQjieRx2C9HYiF",
			createdDate: 'Wed Feb 15 2017 02:47:11 GMT+0100 (Central European Standard Time)',
		}, {
			content: "yes", 
			sender: "k2tQJEFcqYcyGYAax",
			createdDate: 'Sun Mar 05 2017 20:12:43 GMT+0100 (Central European Standard Time)',
			isFromMe: true
		}, {
			content: "How do i remove requests ?",
			sender: "k2tQJEFcqYcyGYAax",
			createdDate: 'Sun Mar 05 2017 20:13:28 GMT+0100 (Central European Standard Time)',
			isFromMe: true
		}, {
			content: "Hmm, for now, you can't :)",
			sender: "aXehQjieRx2C9HYiF", 
			createdDate: 'Mon Mar 06 2017 23:05:28 GMT+0100 (Central European Standard Time)',
			isFromMe: true
		}, {
			content: "I've been thinking of Archive Requests feature. But wasn't sure how it should work...", 
			sender: "aXehQjieRx2C9HYiF", 
			createdDate: 'Mon Mar 06 2017 23:05:54 GMT+0100 (Central European Standard Time)}',
		}
	],
}

class Chattery extends React.Component {
	state = {
		data: data
	}

	onNewMessage = (message) => {
		const { data } = this.state;
		message.createdDate = message.createdDate.toString();
		data.messages.push(message);
		this.setState({data});
		this.scrollBottom = 0;
	}

	render() {
		return (
			<div className="chattery-main-container">
				<ChatteryWindow 
					messages={data.messages}
					meta={data.meta}
				/>
				<ChatteryInput onNewMessage={this.onNewMessage} />
			</div>
		)
	}
}

export { Chattery };