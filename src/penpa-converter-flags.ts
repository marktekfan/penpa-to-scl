export const penpaFlagDescriptions = {
	thickLines: { defaultValue: true, title: 'Thicker Penpa lines to match SudokuPad feature lines' },
	fadeLines: { defaultValue: true, title: 'Fade colors on Penpa feature lines' },
	removeFrame: { defaultValue: true, title: 'Remove extra Penpa Frame lines on regions' },
	doubleLayer: { defaultValue: true, title: 'Doubling of Penpa Surface colors to make them less transparent' },
	answerGen: { defaultValue: true, title: 'Generate answer check from Penpa Solution mode digits' },
	expandGrid: { defaultValue: false, title: 'Always expand Penpa grid to force editable outside clues' },
	useClipPath: { defaultValue: false, title: 'Use clip-path for Penpa shapes', hidden: true },
	// fpuzzles2scl: { defaultValue: false, title: 'Convert f-puzzles to SCL format' },
	debug: { defaultValue: false, title: 'Add Penpa debug info to puzzle' },
} as const;

export type PenpaFlagName = keyof (typeof penpaFlagDescriptions);

type PenpaFlagsRecord = Record<PenpaFlagName, boolean>;

export type PenpaFlagValues = Readonly<PenpaFlagsRecord>;

export interface FlagDescription {
	readonly defaultValue: boolean;
	readonly title: string;
	readonly hidden?: boolean;
}

export class PenpaConverterFlags {
	private flagValues: PenpaFlagsRecord; // Will be initalized with PenpaConverter.settings values

	constructor() {
		this.flagValues = {} as PenpaFlagsRecord; // Will be initalized with PenpaConverter.settings values
		for (let name in penpaFlagDescriptions) {
			let setting = penpaFlagDescriptions[name as PenpaFlagName];
			this.setValue(name, setting.defaultValue);
		}
	}

	static FlagDescriptions() {
		//return flagDescriptions as Record<FlagName, FlagDescription>;
		return Object.keys(penpaFlagDescriptions).map(key => {
			const flag = PenpaConverterFlags.getDescription(key);
			return { key, ...flag, hidden: !!flag.hidden };
		});
	}

	static getDescription(flag: string): FlagDescription {
		return penpaFlagDescriptions[flag as PenpaFlagName];
	}

	getDescription(flag: string): FlagDescription {
		return PenpaConverterFlags.getDescription(flag);
	}

	// setFlagValues(flags: PenpaFlagValues | PenpaFlagName[]) {
	// 	if (Array.isArray(flags)) {
	// 		for (let flagName in penpaFlagDescriptions) {
	// 			const description = PenpaConverterFlags.getDescription(flagName);
	// 			if (!description.hidden) {
	// 				this.setValue(flagName, flags.includes(flagName as PenpaFlagName));
	// 			}
	// 		}
	// 	} else {
	// 		for (let name in flags) {
	// 			this.setValue(name, flags[name as PenpaFlagName]);
	// 		}
	// 	}
	// }

	getFlagValues() {
		return this.flagValues as PenpaFlagValues;
	}

	// getFlagValuesUnsafe() {
	// 	return this.flagValues as PenpaFlagsRecord;
	// }

	getValue(flag: string): boolean {
		return this.flagValues[flag as PenpaFlagName] ?? false;
	}

	setValue(flag: string, value: boolean | string) {
		this.flagValues[flag as PenpaFlagName] = !!value;
	}
}
