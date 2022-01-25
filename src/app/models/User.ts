export interface User {
	id : number;
	name : string;
	lastname : string;
	firstname : string;	
	email : string;
	status : number;
	birthday : Date;
	inscription_date : Date;
	gender : string;
	lin : URL;
	picture : URL;
	picture_small : URL;
	picture_medium : URL;
	picture_big : URL;
	picture_xl : URL;
	country : string;
	lang : string;
	is_kid : boolean;
	explicit_content_level : string;
	explicit_content_levels_available : string[];
	tracklist : URL;
}
