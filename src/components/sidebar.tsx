import React from "react";

import { ListItem } from "../components/user";

export class SideBar extends React.Component {
	render() {
		return (
			<div className="user-sidebar">
				<ul className="users">
				  <li><ListItem classStyle="username" name="User 1"/></li>
				  <li><ListItem classStyle="username" name="User 2"/></li>
				  <li><ListItem classStyle="username" name="User 3"/></li>
					<li><ListItem classStyle="username" name="User 4"/></li>
					<li><ListItem classStyle="username" name="User 1"/></li>
				  <li><ListItem classStyle="username" name="User 2"/></li>
				  <li><ListItem classStyle="username" name="User 3"/></li>
					<li><ListItem classStyle="username" name="User 4"/></li>
					<li><ListItem classStyle="username" name="User 1"/></li>
				  <li><ListItem classStyle="username" name="User 2"/></li>
				  <li><ListItem classStyle="username" name="User 3"/></li>
					<li><ListItem classStyle="username" name="User 4"/></li>
				</ul>
			</div>
		)
	}
}