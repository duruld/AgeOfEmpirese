import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

import { showUnits, showOneDetailUnit } from "./Action"
import { AgeFilter } from "../../utils/AgeFilter"
import { CostFilter } from "../../utils/CostFilter"

import "./table.css"

class Table extends React.Component {
	componentDidMount() {
		this.props.showUnits()
	}

	onClickRow = (e, context) => {
		this.props.showOneDetailUnit(this.props.units.get(e))
	}

	render() {
		const active = this.props.ageFilter.find(
			age => age.get("isActive") === true
		)
		const filteredList = AgeFilter.filter(
			this.props.units,
			active.get("filter")
		)

		const realFilteredList = CostFilter.filter(
			filteredList,
			this.props.costFilter
		)

		const tbody = realFilteredList.map(unit => {
			return (
				<tr
					onClick={() => this.onClickRow(unit.get("id") - 1)}
					key={unit.get("id")}
				>
					<td className="border1">
						<NavLink className="Nav_link" to={"/units/" + unit.get("id")}>
							{unit.get("id")}
						</NavLink>
					</td>
					<td className="border1">
						<NavLink className="Nav_link" to={"/units/" + unit.get("id")}>
							{unit.get("name")}
						</NavLink>
					</td>
					<td className="border1">
						<NavLink className="Nav_link" to={"/units/" + unit.get("id")}>
							{unit.get("age")}
						</NavLink>
					</td>
					<td className="border1" style={{ borderRight: "1px solid gray" }}>
						<NavLink className="Nav_link" to={"/units/" + unit.get("id")}>
							{unit.getIn(["cost", "Gold"]) === undefined
								? ""
								: `Gold:${unit.getIn(["cost", "Gold"])}  `}
							{unit.getIn(["cost", "Wood"]) === undefined
								? ""
								: `Wood:${unit.getIn(["cost", "Wood"])}  `}
							{unit.getIn(["cost", "Food"]) === undefined
								? ""
								: `Food:${unit.getIn(["cost", "Food"])}  `}
						</NavLink>
					</td>
				</tr>
			)
		})

		return (
			<table>
				<thead>
					<tr>
						<th className="border id">id</th>
						<th className="border">name</th>
						<th className="border">age</th>
						<th className="border" style={{ borderRight: "1px solid gray" }}>
							costs
						</th>
					</tr>
				</thead>
				<tbody>{tbody}</tbody>
			</table>
		)
	}
}

/*
const mapStateToProps = state => {
	return {
		realFilteredList: getFilteredList(state)
	}
}
*/

const mapStateToProps = state => {
	return {
		units: state.units,
		ageFilter: state.ageFilter,
		costFilter: state.costFilter
	}
}

const mapDispatchToProps = {
	showUnits,
	showOneDetailUnit
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Table)
