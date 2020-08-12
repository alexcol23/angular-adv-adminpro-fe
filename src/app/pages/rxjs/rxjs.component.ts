import {Component , OnDestroy , OnInit} from '@angular/core';
import {interval , Observable , Subscription} from 'rxjs';
import {filter , map , retry , take} from 'rxjs/operators';

@Component({
    selector: 'app-rxjs' ,
    templateUrl: './rxjs.component.html' ,
    styles: []
})
export class RxjsComponent implements OnInit , OnDestroy {

    public intervalSubs: Subscription;

    constructor() {

        // this.returnObserver()
        //     .pipe(
        //         retry(1)
        //     )
        //     .subscribe(
        //         valor => console.log('Subs ' , valor) ,
        //         error => console.log('Error:' , error) ,
        //         () => console.log('Obs terminado')
        //     );
        this.intervalSubs = this.returnInterval().subscribe(console.log);

    }

    returnObserver(): Observable<number> {
        let i = -1;
        const obs$ = new Observable<number>(observer => {
            const interval = setInterval(() => {
                i++;
                observer.next(i);
                if ( i === 4 ) {
                    clearInterval(interval);
                    observer.complete();
                }
                if ( i === 2 ) {
                    observer.error('i llego al valor de 2');
                }
            } , 1000);
        });
        return obs$;
    }

    returnInterval(): Observable<number> {
        return interval(100)
            .pipe(
                take(10) ,
                map(valor => valor + 1) ,
                filter(valor => valor % 2 === 0)
            );

    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.intervalSubs.unsubscribe();
    }

}
