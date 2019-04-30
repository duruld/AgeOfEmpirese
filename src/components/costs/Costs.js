import React from "react"
import { connect } from "react-redux"

import CostCard from "../costcard/CostCard"

import "./costs.css"

class Costs extends React.Component {
	render() {
		let costValues = this.props.costValues
		return (
			<div className="containerCost">
				<h4>Costs</h4>
				<CostCard name={"Wood"} maxValue={costValues.getIn([0, "maxValue"])} />
				<CostCard name={"Food"} maxValue={costValues.getIn([1, "maxValue"])} />
				<CostCard name={"Gold"} maxValue={costValues.getIn([2, "maxValue"])} />
			</div>
		)
	}
}

const mapStateToProp = state => {
	return {
		costValues: state.costFilter
	}
}
export default connect(mapStateToProp)(Costs)
