/// <reference path="../typings/jquery/jquery.d.ts" />
import { Component } from 'angular2/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'spotify',
    template : `
        <input id="search"
            type="text"
            class="form-control"
            placeholder="Search"
        />
    ` 
})

export class SpotifyComponent {
    constructor(){
        var keyups = Observable.fromEvent($('#search'), "keyup");

        keyups.subscribe(data => console.log(data));
    }
}

