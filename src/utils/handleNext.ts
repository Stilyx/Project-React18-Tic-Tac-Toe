import {iHandleNext} from "../interfaces/IHandleNext";

export const handleNext = (props: iHandleNext): void => {
	props.setBoxes(Array(9).fill(""));
	props.setCurrentPlayer("x");
	props.setDraw(false);
	props.setIsWinner(false);
	props.setWhoWin("");

	if (localStorage.getItem("starterLocalCpu") === "x" && props.isVsCpu) props.setCpuTurn(true);
};
