import {Component , OnInit} from '@angular/core';


@Component({
    selector: 'app-grafica1' ,
    templateUrl: './grafica1.component.html' ,
    styles: []
})
export class Grafica1Component {

    public labels1: string[] = ['Pan' , 'Carne' , 'Leche'];
    public data1 = [
        [34 , 44 , 66]
    ];
}
