import { Component } from '@angular/core';
 
@Component({
    selector: 'dark-site',
    template: `
	    <div class="row header">
	        <div class="logo_copa">
	          <a href="http://www.copaair.com">
	            <img src="../img/COPA_STAR_LOGO_BLACK.png">
	          </a>  
	        </div>
	        <!-- <language-selector></language-selector> -->
	    </div>
	  	<top-menu></top-menu>
    `
})
export class AppComponent { }
