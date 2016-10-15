import { Injectable } from '@angular/core';

import { MenuItem }		from '../models/menuItem';
import { menuEn, menuEs, menuPt } from '../data/mock-menu';

@Injectable()
export class MenuService {
	getMenuEn(): MenuItem[] {
		return menuEn;
	}

	getMenuEs(): MenuItem[] {
		return menuEs;
	}

	getMenuPt(): MenuItem[] {
		return menuPt;
	}
}