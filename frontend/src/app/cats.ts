import {Breed} from "./breeds"

export interface Cat {
    breeds: Breed[];
    id:     string;
    url:    string;
    width:  number;
    height: number;
}