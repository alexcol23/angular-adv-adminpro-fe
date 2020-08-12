import {Component , OnInit} from '@angular/core';

@Component({
    selector: 'app-promesas' ,
    templateUrl: './promesas.component.html' ,
    styles: []
})
export class PromesasComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        this.getUsuarios().then(usuarios => {
            console.log(usuarios);
        });
        // const promersa = new Promise(( resolve , reject ) => {
        //     if ( false ) {
        //         resolve('Hola desde la promesa');
        //     } else {
        //         reject('Algo salio mal');
        //     }
        // });
        //
        // promersa.then(() => {
        //         console.log('termino la promesa');
        //     })
        //     .catch(error => console.log('Manejo de error en la promesa'));
        // console.log('Fin del Init');
    }


    getUsuarios() {
        const promesa = new Promise(resolve => {
            fetch('https://reqres.in/api/users')
                .then(resp => resp.json())
                .then(body => resolve(body.data));
        });
        return promesa;
    }

}
