import { fromJS } from "immutable"
import * as data from "../../resources/age-of-empires-units.json"
export const units = data.units

export const SHOW_ALL_UNITS = "SHOW_ALL_UNITS"
export const SHOW_ONE_UNIT = "SHOW_ONE_UNIT"

export function showUnits() {
	return {
		type: SHOW_ALL_UNITS,
		payload: fromJS(units)
	}
}

export function showOneDetailUnit(unit) {
	return {
		type: SHOW_ONE_UNIT,
		payload: unit
	}
}
