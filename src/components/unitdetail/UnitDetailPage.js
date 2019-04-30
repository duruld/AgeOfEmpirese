import React from "react"
import { connect } from "react-redux"

import { Menu } from "../menu/Menu"

import "./unitdetail.css"

class UnitDetailPage extends React.Component {
	render() {
		const unit = this.props.unit
		return (
			<div className="unitDetailContainer">
				<Menu />
				<table className="unitDetailTable">
					<tbody>
						<tr>
							<td className="leftTd">ID</td>
							<td className="rightTd">{unit.get("id")}</td>
						</tr>
						<tr>
							<td className="leftTd">Name</td>
							<td className="rightTd">{unit.get("name")}</td>
						</tr>
						<tr>
							<td className="leftTd">Description</td>
							<td className="rightTd">{unit.get("description")}</td>
						</tr>
						<tr>
							<td className="leftTd">Min. Required Age</td>
							<td className="rightTd">{unit.get("age")}</td>
						</tr>
						<tr>
							<td className="leftTd">Wood Cost</td>
							<td className="rightTd">
								{unit.getIn(["cost", "Wood"]) === undefined
									? ""
									: unit.getIn(["cost", "Wood"])}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Food Cost</td>
							<td className="rightTd">
								{unit.getIn(["cost", "Food"]) === undefined
									? ""
									: unit.getIn(["cost", "Food"])}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Gold Cost</td>
							<td className="rightTd">
								{unit.getIn(["cost", "Gold"]) === undefined
									? ""
									: unit.getIn(["cost", "Gold"])}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Build Time</td>
							<td className="rightTd">
								{unit.get("build_time") === undefined
									? ""
									: unit.get("build_time")}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Reload Time</td>
							<td className="rightTd">
								{unit.get("reload_time") === undefined
									? ""
									: unit.get("reload_time")}
							</td>
						</tr>
						<tr>
							<td className="leftTd">Hit Points</td>
							<td className="rightTd">{unit.get("hit_points")}</td>
						</tr>
						<tr>
							<td className="leftTd">Hit Attack</td>
							<td className="rightTd">
								{unit.get("attack") === undefined ? "" : unit.get("attack")}
							</td>
						</tr>
						<tr>
							<td
								className="leftTd"
								style={{ borderBottom: "1px solid black " }}
							>
								Accuracy
							</td>
							<td className="rightTd">
								{unit.get("accuracy") === undefined ? "" : unit.get("accuracy")}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		unit: state.unit
	}
}

export default connect(mapStateToProps)(UnitDetailPage)
