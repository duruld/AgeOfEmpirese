export const SET_AGE_FILTER = "SET_AGE_FILTER"

export function setAgeFilter(filter) {
	return {
		type: SET_AGE_FILTER,
		payload: {
			filter
		}
	}
}
