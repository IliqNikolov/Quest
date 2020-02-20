import { IGetQuestStage } from './get-quest-stage';

export interface IGetQuest {
    Id : string;
    IsOwner : boolean;
    PlayerCount : number;
    QuestName : string;
    Code : string;
    Cheats : number;
    MapLat? : number;
    MapLon? : number;
    Date? : string;
    Time? :string;
    Status : string;
    Stages : IGetQuestStage[];
}
