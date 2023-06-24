export interface IGameMode {
	isVsPlayer: boolean;
	isVsCpu: boolean;
	setIsVsPlayer: (e: React.SetStateAction<boolean>) => void;
	setIsVsCpu: (e: React.SetStateAction<boolean>) => void;
}
