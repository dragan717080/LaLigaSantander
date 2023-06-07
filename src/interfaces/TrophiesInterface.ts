export interface TrophyInterface {
    [key: string]: number;
}

export interface TrophyResponseInterface {
    trophy_name: string;
    trophy_count: number;
}

type TrophiesInterface = TrophyInterface[];
export default TrophiesInterface;
