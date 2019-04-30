import * as action from "./Action"

describe("table actions", () => {
	it("showUnits should has all units", () => {
		expect(action.showUnits()).toEqual({
			type: action.SHOW_ALL_UNITS,
			payload: action.units
		})
	})

	it("showOneDetailUnit should has one unit ", () => {
		expect(
			action.showOneDetailUnit({
				id: 1,
				name: "Archer",
				age: "Feudal",
				cost: {
					Wood: 25,
					Gold: 45
				}
			})
		).toEqual({
			type: action.SHOW_ONE_UNIT,
			payload: {
				id: 1,
				name: "Archer",
				age: "Feudal",
				cost: {
					Wood: 25,
					Gold: 45
				}
			}
		})
	})
})
