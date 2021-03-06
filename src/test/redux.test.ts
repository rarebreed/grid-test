import { createStore} from "redux";

import store from "../state/store";
import { logger } from "../logger";
import { SET_SIGNUP_ACTIVE
	     , SET_SIGNUP_EMAIL
       , SET_SIGNUP_PASSWORD
	     , SET_SIGNUP_USERNAME
	     , USER_LOGIN
			 , USER_DISCONNECT
			 , SET_LOGIN_PASSWORD
			 , SET_LOGIN_USERNAME
			 , USER_CONNECTION_EVT
			 } from "../state/types";
import { websocketAction, createLoginAction } from "../state/action-creators";

test("Tests the store", () => {
	const stateStore = createStore(store.reducers);
	stateStore.dispatch({
		type: SET_SIGNUP_ACTIVE,
		status: true
	});

	let stateNow = stateStore.getState();
	// logger.log(stateNow);
	expect(stateNow.modal.signup.isActive).toBeTruthy();
	expect(stateNow.modal.login.isActive).toBeFalsy();

	stateStore.dispatch({
		type: "SET_LOGIN_ACTIVE",
		status: true
	});

	stateNow = stateStore.getState();
	expect(stateNow.modal.signup.isActive).toBeTruthy();
});

test("Tests the signupReducer", () => {
	const stateStore = createStore(store.reducers);
	stateStore.dispatch({
		type: SET_SIGNUP_EMAIL,
		form: {
			name: "Email",
			value: "foobar@gmail.com"
		}
	});

	let stateNow = stateStore.getState();
	expect(stateNow.signup.email).toBe("foobar@gmail.com");

	stateStore.dispatch({
		type: SET_SIGNUP_USERNAME,
		form: {
			name: "Username",
			value: "foobar"
		}
	});

	stateNow = stateStore.getState();
	expect(stateNow.signup.username).toBe("foobar");

	stateStore.dispatch({
		type: SET_SIGNUP_PASSWORD,
		form: {
			name: "Password",
			value: "%$(!jk8Y*"
		}
	});

	stateNow = stateStore.getState();
  expect(stateNow.signup.password).toBe("%$(!jk8Y*");
});

test("Tests adding user to connectedUsers", () => {
	const stateStore = createStore(store.reducers);

	let action = createLoginAction([], "SeanToner", null, USER_LOGIN);
	stateStore.dispatch(action);

	action = createLoginAction([], "toner", null, USER_LOGIN);
	stateStore.dispatch(action);

	let stateNow = stateStore.getState();

	logger.log(stateNow);
	expect(stateNow.connectState.connected.includes("SeanToner")).toBeTruthy();
	expect(stateNow.connectState.connected.includes("toner")).toBeTruthy();
	expect(stateNow.connectState.loggedIn).toBeTruthy();

	action = createLoginAction([], "sean", null, USER_DISCONNECT);
	stateStore.dispatch(action);

	stateNow = stateStore.getState();
	logger.log("Called USER_DISCONNECT with sean");
	logger.log(stateNow);
	expect(stateNow.connectState.connected.includes("sean")).toBeFalsy();
	expect(stateNow.connectState.loggedIn).toBeFalsy();

	const now = Array.from(stateNow.connectState.connected);
	now.push("henry")

	action = createLoginAction(now, "", null, USER_CONNECTION_EVT);
	stateStore.dispatch(action);

	stateNow = stateStore.getState();
	logger.log(stateNow);
	expect(stateNow.connectState.connected.includes("henry")).toBeTruthy();

	action = createLoginAction(stateNow.connectState.connected, "toner", null, USER_LOGIN);
	stateStore.dispatch(action);
	stateNow = stateStore.getState();
	logger.log(stateNow);
});

test("Test loginFormReducer", () => {
	const stateStore = createStore(store.reducers);

	stateStore.dispatch({
		type: SET_LOGIN_PASSWORD,
		form: {
			name: "Password",
			value: "foobar"
		}
	});

	let stateNow = stateStore.getState();
	expect(stateNow.login.password).toBe("foobar");

	stateStore.dispatch({
		type: SET_LOGIN_PASSWORD,
		form: {
			name: "Password",
			value: "xxyy"
		}
	});

	stateNow = stateStore.getState();
	expect(stateNow.login.password).toBe("xxyy");

  stateStore.dispatch({
		type: SET_LOGIN_USERNAME,
		form: {
			name: "Username",
			value: "johndoe"
		}
	});

	stateNow = stateStore.getState();
	expect(stateNow.login.username).toBe("johndoe");
});