import * as action from "./Action"

describe("ages filter actions", () => {
	it("setAgeFilter should take filter and return it", () => {
		expect(action.setAgeFilter("Dark")).toEqual({
			type: action.SET_AGE_FILTER,
			payload: { filter: "Dark" }
		})
	})

	it("setAgeFilter should take filter and return it", () => {
		expect(action.setAgeFilter("All")).toEqual({
			type: action.SET_AGE_FILTER,
			payload: { filter: "All" }
		})
	})
})
