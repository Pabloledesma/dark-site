import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menuItem';

@Component({
	selector: 'top-menu',
	templateUrl: 'app/components/top-menu/top-menu.component.html',
	providers: [ MenuService ]
})

export class TopMenuComponent implements OnInit{
	topMenu: MenuItem[];
	constructor( private menuService: MenuService ){}

	ngOnInit(): void {
		this.getMenu();
	}

	getMenu(): void {
		this.topMenu = this.menuService.getMenuEs();
	}
}