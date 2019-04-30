import { SET_ACTIVE_COST_FILTER, SET_COST_FILTER } from "./Action"
import { fromJS, Map } from "immutable"

export const initialCostState = fromJS([
	{ name: "Wood", maxValue: 0, isActive: false },
	{ name: "Food", maxValue: 0, isActive: false },
	{ name: "Gold", maxValue: 0, isActive: false }
])

export function costFilterReducer(state = initialCostState, action) {
	switch (action.type) {
		case SET_COST_FILTER:
			return state.map(st => {
				if (st.get("name") === action.payload.name) {
					return Map(st.set("maxValue", action.payload.maxValue))
				} else {
					return Map(st)
				}
			})
		case SET_ACTIVE_COST_FILTER:
			return state.map(st => {
				if (st.get("name") === action.payload.name) {
					return Map(st.set("isActive", !st.get("isActive")))
				} else {
					return Map(st)
				}
			})
		default:
			return state
	}
}
