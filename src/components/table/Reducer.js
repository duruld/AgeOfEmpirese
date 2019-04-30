import { SHOW_ALL_UNITS, SHOW_ONE_UNIT } from "./Action"
import { List, Map } from "immutable"

export function unitsReducer(state = List([]), action) {
	switch (action.type) {
		case SHOW_ALL_UNITS:
			return List(action.payload)
		default:
			return List(state)
	}
}

export function oneUnitReducer(state = Map({}), action) {
	switch (action.type) {
		case SHOW_ONE_UNIT:
			return Map(action.payload)
		default:
			return Map(state)
	}
}
