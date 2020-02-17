import { Stage } from './stage';

export interface Quest {
    questName :string;
    code :string;
    cheats: number;
    mapLat: number;
    mapLon: number;
    date: string;
    time: string;
    stages: Stage[];
}
