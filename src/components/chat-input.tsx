import React from "react";

export class ChatInput extends React.Component {
	render() {
		return(
			<div className="chat-input">
				<div className="field-group">
				  <input type="text"></input>
					<button>Send</button>
				</div>
					
			</div>
		)
	}
}