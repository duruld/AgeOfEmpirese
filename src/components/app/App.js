import React from "react"

import { HomePage } from "../homepage/HomePage"
import { Menu } from "../menu/Menu"

import "./app.css"

export const App = () => {
	return (
		<div className="appContainer">
			<div>
				<Menu />
				<HomePage />
			</div>
		</div>
	)
}
