import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Language }					from '../../models/language';
import { LanguageService } from '../../services/language.service';

@Component({
	moduleId: module.id,
	selector: 'language-selector',
	templateUrl: 'language-selector.component.html',
	providers: [ LanguageService ]
})

export class LanguageSelectorComponent {
	languageList: Language[];

	@Input() languageSelected: string;

	constructor( 
		private languageService: LanguageService,
		private route: ActivatedRoute
	){}

	ngOnInit(): void {
	  this.route.params.forEach((params: Params) => {
	    let lang = params['lang'];
	    this.languageService.getLanguages(lang)
	      .then( languageList => this.languageList = languageList  );
	  });
	}
}
