import { Album } from "./Album";
import { Artist } from "./Artist";

export interface Tracklist {
        data: [{ 
            id : number;
            readable : boolean;
            title : string;
            title_short	: string;
            title_version : string;
            link : URL;
            duration : number;
            rank : number;
            explicit_lyrics : boolean;
            preview : URL;
            artist : Artist;
            album : Album;
        }]
    
}