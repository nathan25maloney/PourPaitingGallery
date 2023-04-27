export interface IArtCard {
    artId: string;
    artName: string,
    artDesc: string,
    artPrice: number,
    isAvailable: boolean,
    artDimensions: string,
    artScore: number,
    imgFile: string,
    imgBytes: string,
    hasVoted: number,
    isEditable: boolean
}
