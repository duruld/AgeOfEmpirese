import React from "react"
import { connect } from "react-redux"

import Ages from "../ages/Ages"
import Costs from "../costs/Costs"
import Table from "../table/Table"
import { Menu } from "../menu/Menu"

import "./unitspage.css"

class UnitsPage extends React.Component {
	render() {
		return (
			<div className="unitPageContainer">
				<Menu />
				<div style={{ clear: "both" }}>
					<Ages />
					<Costs />
					<Table />
				</div>
			</div>
		)
	}
}

export default connect()(UnitsPage)
