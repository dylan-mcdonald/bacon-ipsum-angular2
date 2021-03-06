import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
	selector: 'bacon-app',
	templateUrl: './app/templates/bacon-app.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS]
})

export class AppComponent {}
