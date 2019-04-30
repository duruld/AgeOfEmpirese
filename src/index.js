import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import { logger } from "redux-logger"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { App } from "./components/app/App"
import UnitsPage from "./components/unitspage/UnitsPage"
import UnitDetailPage from "./components/unitdetail/UnitDetailPage"

import { ageFilterReducer } from "./components/ages/Reducer"
import { costFilterReducer } from "./components/costcard/Reducer"
import { oneUnitReducer, unitsReducer } from "./components/table/Reducer"

import "./index.css"

const rootReducer = combineReducers({
	units: unitsReducer,
	unit: oneUnitReducer,
	ageFilter: ageFilterReducer,
	costFilter: costFilterReducer
})

const middleware = applyMiddleware(logger)
const store = createStore(rootReducer, middleware)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/units" exact component={UnitsPage} />
				<Route path="/units/:id" component={UnitDetailPage} />
				<Route render={() => <div>Not Found</div>} />
			</Switch>
		</Router>
	</Provider>,
	document.querySelector("#root")
)
