export const CostFilter = {
	filter: (filteredList, filter) => {
		let list = filteredList
		filter.map(unit => {
			switch (unit.get("name")) {
				case "Wood": {
					if (unit.get("isActive") === true) {
						list = filteredList.filter(
							l =>
								l.get("cost") !== undefined &&
								l.getIn(["cost", "Wood"]) < unit.get("maxValue")
						)
					}
					break
				}

				case "Food": {
					if (unit.get("isActive") === true) {
						list = list.filter(
							l =>
								l.get("cost") !== undefined &&
								l.getIn(["cost", "Food"]) < unit.get("maxValue")
						)
					}
					break
				}

				case "Gold": {
					if (unit.get("isActive") === true) {
						list = list.filter(
							l =>
								l.get("cost") !== undefined &&
								l.getIn(["cost", "Gold"]) < unit.get("maxValue")
						)
					}
					break
				}
				default:
					break
			}
		})

		return list
	}
}
