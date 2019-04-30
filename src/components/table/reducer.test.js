import * as reducer from "./Reducer"
import * as action from "./Action"

describe("table reducer", () => {
	it("should handle initial state for unitsReducer", () => {
		expect(reducer.unitsReducer(undefined, {})).toEqual([])
	})

	it("should handle initial state for oneUnitReducer", () => {
		expect(reducer.oneUnitReducer(undefined, {})).toEqual({})
	})

	it("should handle unitsReducer", () => {
		expect(
			reducer.unitsReducer([], {
				type: action.SHOW_ALL_UNITS,
				payload: [
					{
						id: 1,
						name: "Archer",
						description:
							"Quick and light. Weak at close range; excels at battle from distance",
						expansion: "Age of Kings",
						age: "Feudal",
						cost: {
							Wood: 25,
							Gold: 45
						},
						build_time: 35,
						reload_time: 2,
						attack_delay: 0.35,
						movement_rate: 0.96,
						line_of_sight: 6,
						hit_points: 4,
						range: 30,
						attack: 4,
						armor: "0/0",
						accuracy: "80%"
					}
				]
			})
		).toEqual([
			{
				id: 1,
				name: "Archer",
				description:
					"Quick and light. Weak at close range; excels at battle from distance",
				expansion: "Age of Kings",
				age: "Feudal",
				cost: {
					Wood: 25,
					Gold: 45
				},
				build_time: 35,
				reload_time: 2,
				attack_delay: 0.35,
				movement_rate: 0.96,
				line_of_sight: 6,
				hit_points: 4,
				range: 30,
				attack: 4,
				armor: "0/0",
				accuracy: "80%"
			}
		])

		expect(
			reducer.unitsReducer(
				[
					{
						id: 1,
						name: "Archer",
						description:
							"Quick and light. Weak at close range; excels at battle from distance",
						expansion: "Age of Kings",
						age: "Feudal",
						cost: {
							Wood: 25,
							Gold: 45
						},
						build_time: 35,
						reload_time: 2,
						attack_delay: 0.35,
						movement_rate: 0.96,
						line_of_sight: 6,
						hit_points: 4,
						range: 30,
						attack: 4,
						armor: "0/0",
						accuracy: "80%"
					}
				],
				{
					type: action.SHOW_ALL_UNITS,
					payload: [
						{
							id: 1,
							name: "Archer",
							description:
								"Quick and light. Weak at close range; excels at battle from distance",
							expansion: "Age of Kings",
							age: "Feudal",
							cost: {
								Wood: 25,
								Gold: 45
							},
							build_time: 35,
							reload_time: 2,
							attack_delay: 0.35,
							movement_rate: 0.96,
							line_of_sight: 6,
							hit_points: 4,
							range: 30,
							attack: 4,
							armor: "0/0",
							accuracy: "80%"
						},
						{
							id: 2,
							name: "Crossbowman",
							description: "Upgraded archer",
							expansion: "Age of Kings",
							age: "Castle",
							cost: {
								Wood: 25,
								Gold: 45
							},
							build_time: 27,
							reload_time: 2,
							attack_delay: 0.35,
							movement_rate: 0.96,
							line_of_sight: 7,
							hit_points: 35,
							range: 5,
							attack: 5,
							armor: "0/0",
							attack_bonus: ["+3 spearmen"],
							accuracy: "85%"
						}
					]
				}
			)
		).toEqual([
			{
				id: 1,
				name: "Archer",
				description:
					"Quick and light. Weak at close range; excels at battle from distance",
				expansion: "Age of Kings",
				age: "Feudal",
				cost: {
					Wood: 25,
					Gold: 45
				},
				build_time: 35,
				reload_time: 2,
				attack_delay: 0.35,
				movement_rate: 0.96,
				line_of_sight: 6,
				hit_points: 4,
				range: 30,
				attack: 4,
				armor: "0/0",
				accuracy: "80%"
			},
			{
				id: 2,
				name: "Crossbowman",
				description: "Upgraded archer",
				expansion: "Age of Kings",
				age: "Castle",
				cost: {
					Wood: 25,
					Gold: 45
				},
				build_time: 27,
				reload_time: 2,
				attack_delay: 0.35,
				movement_rate: 0.96,
				line_of_sight: 7,
				hit_points: 35,
				range: 5,
				attack: 5,
				armor: "0/0",
				attack_bonus: ["+3 spearmen"],
				accuracy: "85%"
			}
		])
	})

	it("should handle oneUnitReducer ", () => {
		expect(
			reducer.oneUnitReducer(
				{},
				{
					type: action.SHOW_ONE_UNIT,
					payload: {
						id: 1,
						name: "Archer",
						description:
							"Quick and light. Weak at close range; excels at battle from distance",
						expansion: "Age of Kings",
						age: "Feudal",
						cost: {
							Wood: 25,
							Gold: 45
						},
						build_time: 35,
						reload_time: 2,
						attack_delay: 0.35,
						movement_rate: 0.96,
						line_of_sight: 6,
						hit_points: 4,
						range: 30,
						attack: 4,
						armor: "0/0",
						accuracy: "80%"
					}
				}
			)
		).toEqual({
			id: 1,
			name: "Archer",
			description:
				"Quick and light. Weak at close range; excels at battle from distance",
			expansion: "Age of Kings",
			age: "Feudal",
			cost: {
				Wood: 25,
				Gold: 45
			},
			build_time: 35,
			reload_time: 2,
			attack_delay: 0.35,
			movement_rate: 0.96,
			line_of_sight: 6,
			hit_points: 4,
			range: 30,
			attack: 4,
			armor: "0/0",
			accuracy: "80%"
		})

		expect(
			reducer.oneUnitReducer(
				{
					id: 2,
					name: "Crossbowman",
					description: "Upgraded archer",
					expansion: "Age of Kings",
					age: "Castle",
					cost: {
						Wood: 25,
						Gold: 45
					},
					build_time: 27,
					reload_time: 2,
					attack_delay: 0.35,
					movement_rate: 0.96,
					line_of_sight: 7,
					hit_points: 35,
					range: 5,
					attack: 5,
					armor: "0/0",
					attack_bonus: ["+3 spearmen"],
					accuracy: "85%"
				},
				{
					type: action.SHOW_ONE_UNIT,
					payload: {
						id: 1,
						name: "Archer",
						description:
							"Quick and light. Weak at close range; excels at battle from distance",
						expansion: "Age of Kings",
						age: "Feudal",
						cost: {
							Wood: 25,
							Gold: 45
						},
						build_time: 35,
						reload_time: 2,
						attack_delay: 0.35,
						movement_rate: 0.96,
						line_of_sight: 6,
						hit_points: 4,
						range: 30,
						attack: 4,
						armor: "0/0",
						accuracy: "80%"
					}
				}
			)
		).toEqual({
			id: 1,
			name: "Archer",
			description:
				"Quick and light. Weak at close range; excels at battle from distance",
			expansion: "Age of Kings",
			age: "Feudal",
			cost: {
				Wood: 25,
				Gold: 45
			},
			build_time: 35,
			reload_time: 2,
			attack_delay: 0.35,
			movement_rate: 0.96,
			line_of_sight: 6,
			hit_points: 4,
			range: 30,
			attack: 4,
			armor: "0/0",
			accuracy: "80%"
		})
	})
})
