
import * as React from "react";
import * as ReactDom from "react-dom";

import { NavBar } from "./components/navbar";
import { SideBar } from "./components/sidebar";
import { ChatInput } from "./components/chat-input";
import { SideBarRight } from "./components/sidebar-right";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <SideBar />
        <ChatInput />
        <SideBarRight />
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector("#app"));
