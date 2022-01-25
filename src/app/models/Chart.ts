import { Albumlist } from "./Albumlist";
import { Artistlist } from "./Artistlist";
import { Tracklist } from "./Tracklist";

export  interface Chart {
        tracks:Tracklist;
        albums:Albumlist;
        artists:Artistlist;
}