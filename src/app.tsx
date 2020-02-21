
import * as React from "react";
import * as ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { reducers } from "./state/store";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar-left";
import ChatInput from "./components/chat/chat-input";
import { SideBarRight } from "./components/sidebar-right";

const store = createStore(reducers);

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

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector("#app")
);