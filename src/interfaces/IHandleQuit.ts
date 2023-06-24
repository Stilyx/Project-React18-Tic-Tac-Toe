export interface IHandleQuit {
	setOScore: (e: React.SetStateAction<number>) => void;
	setXScore: (e: React.SetStateAction<number>) => void;
	setTies: (e: React.SetStateAction<number>) => void;
	setDraw: (e: React.SetStateAction<boolean>) => void;
	setIsWinner: (e: React.SetStateAction<boolean>) => void;
	setBoxes: (e: React.SetStateAction<string[]>) => void;
	setWhoWin: (e: React.SetStateAction<string>) => void;
	setCurrentPlayer: (e: React.SetStateAction<string>) => void;
	setRestartGame: (e: React.SetStateAction<boolean>) => void;
	setStarterSimbol: (e: React.SetStateAction<string>) => void;
	setCpuSimbol: (e: React.SetStateAction<string>) => void;
}
