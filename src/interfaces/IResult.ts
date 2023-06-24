export interface IResult {
	whoWin: string;
	isWinner: boolean;
	draw: boolean;
	restartGame: boolean;
	setDraw: (e: React.SetStateAction<boolean>) => void;
	setWhoWin: (e: React.SetStateAction<string>) => void;
	setIsWinner: (e: React.SetStateAction<boolean>) => void;
	setRestartGame: (e: React.SetStateAction<boolean>) => void;
}
