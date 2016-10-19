import { Injectable, Input } from '@angular/core';
import { Language } from '../models/language';
import { languageSelectorEN, languageSelectorES, languageSelectorPT } from '../data/mock-language';

@Injectable()
export class LanguageService {

	@Input() lang: string;

	getLanguages( lang ): Promise<Language[]> {
		console.log(lang);
		switch(lang){
			case 'en':
				return Promise.resolve(languageSelectorEN);
			case 'pt':
				return Promise.resolve(languageSelectorPT);
			default: 
				return Promise.resolve(languageSelectorES);	
		}
	}
}
