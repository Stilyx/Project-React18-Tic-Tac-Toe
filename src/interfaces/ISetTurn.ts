export interface ISetTurn {
	boxes: string[];
	cpuTurn: boolean;
	currentPlayer: string;
	playerTurn: boolean;
	setBoxes: (e: React.SetStateAction<string[]>) => void;
	setCurrentPlayer: (e: React.SetStateAction<string>) => void;
	setCpuTurn: (e: React.SetStateAction<boolean>) => void;
	setPlayerTurn: (e: React.SetStateAction<boolean>) => void;
}
