import React from "react"
import { Link } from "react-router-dom"

import "./menu.css"

export const Menu = () => {
	return (
		<div className="menuContainer">
			<Link to="/units" className="texts">
				Units
			</Link>
			<Link to="/" className="texts">
				Home
			</Link>
		</div>
	)
}
