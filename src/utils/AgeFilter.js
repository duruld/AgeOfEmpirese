export const AgeFilter = {
	filter: (units, filter) => {
		switch (filter) {
			case "All":
				return units
			default:
				return units.filter(unit => unit.get("age") === filter)
		}
	}
}
