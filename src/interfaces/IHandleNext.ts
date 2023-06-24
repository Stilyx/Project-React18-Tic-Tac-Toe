export interface iHandleNext {
	setBoxes: (e: React.SetStateAction<string[]>) => void;
	setCurrentPlayer: (e: React.SetStateAction<string>) => void;
	setWhoWin: (e: React.SetStateAction<string>) => void;
	setIsWinner: (e: React.SetStateAction<boolean>) => void;
	setDraw: (e: React.SetStateAction<boolean>) => void;
	setCpuTurn: (e: React.SetStateAction<boolean>) => void;
	isVsCpu: boolean;
}
