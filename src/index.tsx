import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import App from "./App";

import SimbolSelectProvider from "./context/SimbolSelect";
import SetTurnProvider from "./context/SetTurn";
import ScoreBoardContext from "./context/ScoreBoard";
import ResultProvider from "./context/Result";
import GameModeProvider from "./context/GameMode";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<SimbolSelectProvider>
			<ScoreBoardContext>
				<SetTurnProvider>
					<ResultProvider>
						<GameModeProvider>
							<App />
						</GameModeProvider>
					</ResultProvider>
				</SetTurnProvider>
			</ScoreBoardContext>
		</SimbolSelectProvider>
	</React.StrictMode>
);
