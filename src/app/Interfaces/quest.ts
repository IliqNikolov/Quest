import { IStage } from './stage';

export interface IQuest {
    questName :string;
    code :string;
    cheats: number;
    mapLat: number;
    mapLon: number;
    date: string;
    time: string;
    stages: IStage[];
}
