import React from "react";

export class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar-grid-area">
				<ul className="navbar">
					<li>
						<a className="navbar-item" href="foobar">Chat</a>
					</li>
					<li>
					  <a className="navbar-item" href="foobar">Webcam</a>
					</li>
					<li>
					  <a className="login button" href="foobar">Login with Google</a>
					</li>
				</ul>
			</nav>
		)
	}
}