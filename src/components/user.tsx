import React from "react";

interface Item {
	classStyle: string,
	name: string
}

export class ListItem extends React.Component<Item> {
	render() {
		return (
			<div className={ this.props.classStyle }>
				<span>
					<i className="far fa-user"/>
				</span>
				
				{ this.props.name }
			</div>
		)
	}
}