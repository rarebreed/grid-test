import React from "react";

import { ListItem } from "../components/user";

export class SideBar extends React.Component {
	render() {
		return (
			<div className="user-sidebar">
				<ul className="users">
				  <ListItem classStyle="username" name="stoner"/>
				  <ListItem classStyle="username" name="blaZ0r"/>
				  <ListItem classStyle="username" name="3l!t30n3"/>
					<ListItem classStyle="username" name="r@Z0r"/>
					<ListItem classStyle="username" name="User 1"/>
				  <ListItem classStyle="username" name="User 2"/>
				  <ListItem classStyle="username" name="User 3"/>
					<ListItem classStyle="username" name="User 4"/>
					<ListItem classStyle="username" name="User 1"/>
				  <ListItem classStyle="username" name="User 2"/>
				  <ListItem classStyle="username" name="User 3"/>
					<ListItem classStyle="username" name="User 4"/>
				</ul>
			</div>
		)
	}
}