import React, {useContext, useEffect} from "react";

// Styles
import "./Boxes.scss";

// Contexts
import {ScoreBoardContext} from "../../context/ScoreBoard";
import {ResultContext} from "../../context/Result";
import {GameModeContext} from "../../context/GameMode";
import {SimbolSelectContext} from "../../context/SimbolSelect";
import {setTurnContext} from "../../context/SetTurn";

// Utils
import {combinations} from "../../utils/getCombinations";

function Boxes() {
	const {setOScore, setTies, setXScore, oScore, ties, xScore} = useContext(ScoreBoardContext);
	const {setIsWinner, setWhoWin, isWinner, setDraw, draw} = useContext(ResultContext);
	const {isVsCpu, setIsVsCpu} = useContext(GameModeContext);
	const turns = useContext(setTurnContext);
	const simbol = useContext(SimbolSelectContext);

	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	useEffect(() => {
		const cpuLocalStorage = localStorage.getItem("starterLocalCpu");
		const starterPlayerSimbol = localStorage.getItem("starterPlayerSimbol");
		const gamemode = localStorage.getItem("gamemode");
		if (!starterPlayerSimbol) return;
		if (!cpuLocalStorage) return;
		if (!gamemode) return;
		simbol.setStarterSimbol(starterPlayerSimbol);
		simbol.setCpuSimbol(cpuLocalStorage);

		if (simbol.starterSimbol === "x") turns.setPlayerTurn(true);
		if (simbol.cpuSimbol === "x" && gamemode === "cpu") {
			setIsVsCpu(true);
			cpuMove(isWinner);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (turns.cpuTurn) cpuMove(isWinner);
		checkWinner();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [turns.boxes, isWinner]);

	const handleCellClick = (index: number) => {
		if (turns.boxes[index] !== "") return;
		if (isWinner) return;
		turns.setBoxes(prev => {
			const newGameData = [...prev];
			newGameData[index] = turns.currentPlayer;
			return newGameData;
		});
		turns.setCurrentPlayer(turns.currentPlayer === "x" ? "o" : "x");
	};

	const handleCpuMode = (index: number) => {
		if (turns.boxes[index] !== "") return;

		if (turns.playerTurn) {
			turns.setBoxes(prev => {
				const newGameData = [...prev];
				newGameData[index] = simbol.starterSimbol;
				return newGameData;
			});

			if (isWinner && draw) return;
			turns.setCurrentPlayer(simbol.starterSimbol === "x" ? "o" : "x");
			turns.setCpuTurn(true);
		}
	};

	const cpuMove = (winner: boolean) => {
		if (winner) return;
		let filteredArray: number[] = [];
		turns.boxes.map((box, index) => {
			if (box === "") {
				filteredArray.push(index);
				const randomIndex = filteredArray[Math.floor(Math.random() * filteredArray.length)];
				return turns.setBoxes(
					turns.boxes.map((box, index) => (index === randomIndex ? simbol.cpuSimbol : box))
				);
			}
			return null;
		});

		turns.setCurrentPlayer(simbol.cpuSimbol === "o" ? "x" : "o");
		turns.setCpuTurn(false);
		turns.setPlayerTurn(true);
	};

	const checkWinner = () => {
		let winner: string = "";
		for (let values of winningCombinations) {
			const winX =
				turns.boxes[values[0]] === "x" &&
				turns.boxes[values[1]] === "x" &&
				turns.boxes[values[2]] === "x";
			const winO =
				turns.boxes[values[0]] === "o" &&
				turns.boxes[values[1]] === "o" &&
				turns.boxes[values[2]] === "o";

			if (winX) {
				setWhoWin("x");
				setXScore(xScore + 1);
				winner = "x";
			}
			if (winO) {
				setWhoWin("o");
				setOScore(oScore + 1);
				winner = "o";
			}
			if (winner) {
				setIsWinner(true);
				markWin(values, winner);
				turns.setCpuTurn(false);
				break;
			}
		}
		if (!winner) checkDraw();
	};

	function markWin(combination: number[], winner: string) {
		turns.setBoxes(
			turns.boxes.map((box, index) => (combinations(combination, index) ? `${winner}winner` : box))
		);
	}

	const checkDraw = (): void => {
		if (turns.boxes.every(box => box !== "" && box !== "xwinner" && box !== "owinner")) {
			setDraw(true);
			setTies(ties + 1);
		}
	};

	return (
		<div
			className={
				isVsCpu
					? `game-action ${simbol.starterSimbol}-turn`
					: `game-action ${turns.currentPlayer}-turn`
			}
		>
			{turns.boxes.map((box, index) => (
				<div
					key={index}
					className={`box ${box}`}
					id={`box${index}`}
					onClick={() => (isVsCpu ? handleCpuMode(index) : handleCellClick(index))}
				></div>
			))}
		</div>
	);
}
//
export default Boxes;
