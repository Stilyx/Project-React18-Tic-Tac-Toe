import React from "react";
import "./App.scss";
import Home from "./routes/Home";
import Game from "./routes/Game";

import {RouterProvider, createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/game",
		element: <Game />
	}
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
