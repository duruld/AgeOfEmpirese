import React from "react"
import { connect } from "react-redux"

import { setCostFilter, setActiveCostFilter } from "./Action"

class CostCard extends React.Component {
	render() {
		return (
			<div className={this.props.name}>
				<input
					className="check"
					type="checkbox"
					onClick={() => this.props.setActiveCostFilter(this.props.name)}
				/>
				<h3 className="rangeName">{this.props.name}</h3>
				<input
					className="range"
					type="range"
					min="1"
					max="200"
					value={this.props.maxValue}
					onChange={e =>
						this.props.setCostFilter(e.target.value, this.props.name)
					}
				/>
				<p className="score">0-{this.props.maxValue}</p>
			</div>
		)
	}
}

const mapStateToProp = state => {
	return {
		state
	}
}

const mapDispatchToProp = {
	setCostFilter,
	setActiveCostFilter
}

export default connect(
	mapStateToProp,
	mapDispatchToProp
)(CostCard)
