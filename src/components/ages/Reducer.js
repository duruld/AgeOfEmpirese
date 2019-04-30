import { SET_AGE_FILTER } from "./Action"
import { fromJS, Map } from "immutable"

export const initialAgeState = fromJS([
	{ filter: "All", isActive: true },
	{ filter: "Dark", isActive: false },
	{ filter: "Feudal", isActive: false },
	{ filter: "Castle", isActive: false },
	{ filter: "Imperial", isActive: false }
])

export function ageFilterReducer(state = initialAgeState, action) {
	switch (action.type) {
		case SET_AGE_FILTER:
			return state.map(st => {
				if (st.get("filter") === action.payload.filter) {
					return Map(st.set("isActive", !st.get("isActive")))
				} else {
					return Map(st.set("isActive", false))
				}
			})
		default:
			return state
	}
}
