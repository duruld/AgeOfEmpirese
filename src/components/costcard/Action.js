export const SET_ACTIVE_COST_FILTER = "SET_ACTIVE_COST_FILTER"
export const SET_COST_FILTER = "SET_COST_FILTER"

export function setCostFilter(maxValue, name) {
	return {
		type: SET_COST_FILTER,
		payload: {
			maxValue,
			name
		}
	}
}
export function setActiveCostFilter(name) {
	return {
		type: SET_ACTIVE_COST_FILTER,
		payload: {
			name
		}
	}
}
