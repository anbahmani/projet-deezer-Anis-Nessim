

export interface Playlist {
	id : number;
	title : string;
	public : boolean;
	nb_tracks : number;
	link : URL;
	picture	: URL;
	picture_small : URL;
	picture_medium : URL;
	picture_big	: URL;
	picture_xl	: URL;
	checksum : string;
	creator : any;
	creation_date:Date;
	description:string;
	duration:number;
	fans:number;
	tracks:any;
}