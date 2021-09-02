import { Component } from '@angular/core';

@Component ({

	selector:'app-body',
	templateUrl: './body.component.html'

})

export class BodyComponent{

	Frase: any = {
		mensaje: 'este es un mensaje',
		autor: 'RicardoZ'
	}

}