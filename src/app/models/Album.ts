import { Artist } from "./Artist";
import { Track } from "./Track";

export interface Album{
	id : number;
	title : string;
	link : URL;
	cover : URL;
	cover_small	: URL;
	cover_medium : URL;
	cover_big : URL;
	cover_xl : URL;
	genre_id : number;
	nb_tracks : number;
	record_type	: string;
	explicit_lyrics : boolean;
	artist : Artist;
	fans:number;
	release_date:Date;
	duration:number;
	tracks:	Track[];
}