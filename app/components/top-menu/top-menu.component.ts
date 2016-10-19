import { Component, OnInit } 	from '@angular/core';

import { MenuService } 			from '../../services/menu.service';
import { MenuItem } 			from '../../models/menuItem';

@Component({
	moduleId: module.id,
	selector: 'top-menu',
	templateUrl: 'top-menu.component.html',
	providers: [ MenuService ]
})

export class TopMenuComponent implements OnInit{
	
	topMenu: MenuItem[];
	document: any;

	constructor( private menuService: MenuService ){}

	ngOnInit(): void {
		this.getMenu();
	}

	getMenu(): void {
		this.topMenu = this.menuService.getMenuEs();
	}
}