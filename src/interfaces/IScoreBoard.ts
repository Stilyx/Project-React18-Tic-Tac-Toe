export interface IScoreBoard {
	xScore: number;
	oScore: number;
	ties: number;
	setXScore: (e: React.SetStateAction<number>) => void;
	setOScore: (e: React.SetStateAction<number>) => void;
	setTies: (e: React.SetStateAction<number>) => void;
}
