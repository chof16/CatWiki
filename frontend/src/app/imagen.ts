import { Breed } from "./breeds";

export interface Image {
    breeds:     Breed[];
    categories: any[];
    id:         string;
    url:        string;
    width:      number;
    height:     number;
}