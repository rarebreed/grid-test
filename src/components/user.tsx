import React from "react";

interface Item {
	classStyle: string,
	name: string
}

export class ListItem extends React.Component<Item> {
	render() {
		return (
			<li className={ this.props.classStyle }>
				<span className="user-avatar">
					<i className="far fa-user"/>
				</span>
				{ this.props.name }
			</li>
		)
	}
}