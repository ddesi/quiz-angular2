import {Person} from "./person";

export class Quiz {
	visibleHints: string[] = [];
	image: string;
	charDescription: string;
	guessedName: string;
	counter = 0;
	nameIsCorrect = false;
	nameIsincorrect = false;
	score = 0;
}

