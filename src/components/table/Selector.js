import { createSelector } from "reselect"

import { AgeFilter } from "../../utils/AgeFilter"
import { CostFilter } from "../../utils/CostFilter"

const getUnits = state => {
	console.log("????", state)
	return state.get("units")
}
const getAgeFilter = state => state.get("ageFilter")
const getCostFilter = state => state.get("costFilter")

export const getFilteredList = createSelector(
	[getUnits, getAgeFilter, getCostFilter],
	() => {
		const active = getAgeFilter.find(age => age.get("isActive") === true)

		const filteredList = AgeFilter.filter(
			this.props.units,
			active.get("filter")
		)

		const realFilteredList = CostFilter.filter(filteredList, getCostFilter)

		return realFilteredList
	}
)
