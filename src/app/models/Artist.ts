export interface Artist {
	id	: number;
	name : string;
	link : URL;
	picture	: URL;
	picture_small	: URL;
	picture_medium : URL;
	picture_big	: URL;
	picture_xl	: URL;
	nb_album : number;
	nb_fan : number;
	radio : boolean;
}