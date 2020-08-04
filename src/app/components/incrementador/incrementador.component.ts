import {Component , EventEmitter , Input , OnInit , Output} from '@angular/core';

@Component({
    selector: 'app-incrementador' ,
    templateUrl: './incrementador.component.html' ,
    styles: []
})
export class IncrementadorComponent {

    @Input() progress: number = 90;
    @Input() btnClass: string = 'btn btn-primary';
    @Output() valorSalida: EventEmitter<number> = new EventEmitter<number>();

    cambiarValor( valor: number ): number {
        if ( this.progress >= 100 && valor >= 0 ) {
            this.valorSalida.emit(100);
            return this.progress = 100;
        }
        if ( this.progress <= 0 && valor <= 0 ) {
            this.valorSalida.emit(0);
            return this.progress = 0;
        }
        this.progress = this.progress + valor;
        this.valorSalida.emit(this.progress);
    }

    onChange( nuevoValor: number ) {
        if ( nuevoValor >= 100 ) {
            this.progress = 100;
        } else if ( nuevoValor <= 0 ) {
            this.progress = 0;
        } else {
            this.progress = nuevoValor;
        }

    }
}
