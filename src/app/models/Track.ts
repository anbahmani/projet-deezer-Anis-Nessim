export interface Track {
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
	artist : Object;
	album : Object;
}