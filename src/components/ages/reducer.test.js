import * as reducer from "./Reducer"

import * as action from "./Action"

describe("age reducer", () => {
	it("should handle initial state", () => {
		expect(reducer.ageFilterReducer(undefined, {})).toEqual(
			reducer.initialAgeState
		)
	})

	it("should handle ageFilterReducer", () => {
		expect(
			reducer.ageFilterReducer(reducer.initialAgeState, {
				type: action.SET_AGE_FILTER,
				payload: { filter: "Dark" }
			})
		).toEqual([
			{ filter: "All", isActive: false },
			{ filter: "Dark", isActive: true },
			{ filter: "Feudal", isActive: false },
			{ filter: "Castle", isActive: false },
			{ filter: "Imperial", isActive: false }
		])

		expect(
			reducer.ageFilterReducer(reducer.initialAgeState, {
				type: action.SET_AGE_FILTER,
				payload: { filter: "Imperial" }
			})
		).toEqual([
			{ filter: "All", isActive: false },
			{ filter: "Dark", isActive: false },
			{ filter: "Feudal", isActive: false },
			{ filter: "Castle", isActive: false },
			{ filter: "Imperial", isActive: true }
		])
	})
})
