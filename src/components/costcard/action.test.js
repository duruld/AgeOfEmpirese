import * as action from "./Action"

describe("costcard filter actions", () => {
	it("setCostFilter should take maxValue, filter name and return them", () => {
		expect(action.setCostFilter(100, "Wood")).toEqual({
			type: action.SET_COST_FILTER,
			payload: {
				maxValue: 100,
				name: "Wood"
			}
		})

		expect(action.setCostFilter(132, "Gold")).toEqual({
			type: action.SET_COST_FILTER,
			payload: {
				maxValue: 132,
				name: "Gold"
			}
		})
	})

	it("setActiveCostFilter should take name and return it", () => {
		expect(action.setActiveCostFilter("Food")).toEqual({
			type: action.SET_ACTIVE_COST_FILTER,
			payload: {
				name: "Food"
			}
		})

		expect(action.setActiveCostFilter("Gold")).toEqual({
			type: action.SET_ACTIVE_COST_FILTER,
			payload: {
				name: "Gold"
			}
		})
	})
})
