import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PersonService {

    constructor(private http:Http) {}

    retrievePeople() {
        return Observable.forkJoin(
            this.http.get('./app/people.json').map((res:Response) => res.json()),
            this.http.get('./app/people2.json').map((res:Response) => res.json())
            );
    };

}