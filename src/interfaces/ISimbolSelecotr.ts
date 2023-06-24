export interface ISimbolContext {
	starterSimbol: string;
	cpuSimbol: string;
	setStarterSimbol: (e: React.SetStateAction<string>) => void;
	setCpuSimbol: (e: React.SetStateAction<string>) => void;
}
