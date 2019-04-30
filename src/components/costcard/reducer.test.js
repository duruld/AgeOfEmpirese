import * as reducer from "./Reducer"
import * as action from "./Action"

describe("cost reducer", () => {
	it("should handle initial state ", () => {
		expect(reducer.costFilterReducer(undefined, {})).toEqual(
			reducer.initialCostState
		)
	})

	it("should handle costFilterReducer", () => {
		expect(
			reducer.costFilterReducer(reducer.initialCostState, {
				type: action.SET_COST_FILTER,
				payload: { maxValue: 110, name: "Gold" }
			})
		).toEqual([
			{ name: "Wood", maxValue: 0, isActive: false },
			{ name: "Food", maxValue: 0, isActive: false },
			{ name: "Gold", maxValue: 110, isActive: false }
		])

		expect(
			reducer.costFilterReducer(
				[
					{ name: "Wood", maxValue: 0, isActive: false },
					{ name: "Food", maxValue: 0, isActive: false },
					{ name: "Gold", maxValue: 110, isActive: false }
				],
				{
					type: action.SET_COST_FILTER,
					payload: { maxValue: 90, name: "Wood" }
				}
			)
		).toEqual([
			{ name: "Wood", maxValue: 90, isActive: false },
			{ name: "Food", maxValue: 0, isActive: false },
			{ name: "Gold", maxValue: 110, isActive: false }
		])

		expect(
			reducer.costFilterReducer(
				[
					{ name: "Wood", maxValue: 90, isActive: false },
					{ name: "Food", maxValue: 0, isActive: false },
					{ name: "Gold", maxValue: 110, isActive: false }
				],
				{
					type: action.SET_COST_FILTER,
					payload: { maxValue: 50, name: "Food" }
				}
			)
		).toEqual([
			{ name: "Wood", maxValue: 90, isActive: false },
			{ name: "Food", maxValue: 50, isActive: false },
			{ name: "Gold", maxValue: 110, isActive: false }
		])

		expect(
			reducer.costFilterReducer(
				[
					{ name: "Wood", maxValue: 90, isActive: false },
					{ name: "Food", maxValue: 50, isActive: false },
					{ name: "Gold", maxValue: 110, isActive: false }
				],
				{
					type: action.SET_COST_FILTER,
					payload: { maxValue: 33, name: "Gold" }
				}
			)
		).toEqual([
			{ name: "Wood", maxValue: 90, isActive: false },
			{ name: "Food", maxValue: 50, isActive: false },
			{ name: "Gold", maxValue: 33, isActive: false }
		])

		expect(
			reducer.costFilterReducer(
				[
					{ name: "Wood", maxValue: 90, isActive: false },
					{ name: "Food", maxValue: 50, isActive: false },
					{ name: "Gold", maxValue: 110, isActive: false }
				],
				{
					type: action.SET_ACTIVE_COST_FILTER,
					payload: { name: "Food" }
				}
			)
		).toEqual([
			{ name: "Wood", maxValue: 90, isActive: false },
			{ name: "Food", maxValue: 50, isActive: true },
			{ name: "Gold", maxValue: 110, isActive: false }
		])

		expect(
			reducer.costFilterReducer(
				[
					{ name: "Wood", maxValue: 90, isActive: false },
					{ name: "Food", maxValue: 50, isActive: true },
					{ name: "Gold", maxValue: 110, isActive: false }
				],
				{
					type: action.SET_ACTIVE_COST_FILTER,
					payload: { name: "Gold" }
				}
			)
		).toEqual([
			{ name: "Wood", maxValue: 90, isActive: false },
			{ name: "Food", maxValue: 50, isActive: true },
			{ name: "Gold", maxValue: 110, isActive: true }
		])

		expect(
			reducer.costFilterReducer(
				[
					{ name: "Wood", maxValue: 90, isActive: false },
					{ name: "Food", maxValue: 50, isActive: true },
					{ name: "Gold", maxValue: 110, isActive: true }
				],
				{
					type: action.SET_ACTIVE_COST_FILTER,
					payload: { name: "Wood" }
				}
			)
		).toEqual([
			{ name: "Wood", maxValue: 90, isActive: true },
			{ name: "Food", maxValue: 50, isActive: true },
			{ name: "Gold", maxValue: 110, isActive: true }
		])

		expect(
			reducer.costFilterReducer(
				[
					{ name: "Wood", maxValue: 90, isActive: true },
					{ name: "Food", maxValue: 50, isActive: true },
					{ name: "Gold", maxValue: 110, isActive: true }
				],
				{
					type: action.SET_ACTIVE_COST_FILTER,
					payload: { name: "Wood" }
				}
			)
		).toEqual([
			{ name: "Wood", maxValue: 90, isActive: false },
			{ name: "Food", maxValue: 50, isActive: true },
			{ name: "Gold", maxValue: 110, isActive: true }
		])

		expect(
			reducer.costFilterReducer(
				[
					{ name: "Wood", maxValue: 90, isActive: false },
					{ name: "Food", maxValue: 50, isActive: true },
					{ name: "Gold", maxValue: 110, isActive: true }
				],
				{
					type: action.SET_ACTIVE_COST_FILTER,
					payload: { name: "Food" }
				}
			)
		).toEqual([
			{ name: "Wood", maxValue: 90, isActive: false },
			{ name: "Food", maxValue: 50, isActive: false },
			{ name: "Gold", maxValue: 110, isActive: true }
		])
	})
})
