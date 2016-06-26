import { Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: "star",
    template: `
        <i 
        class="glyphicon"
        [class.glyphicon-star-empty]="icon"
        [class.glyphicon-star]="!icon"
        (click)="changeClass()"
        ></i>
        <br/>
    `,
    inputs: ["icon"]
})

export class StarComponent{
    @Input() icon = true;

    @Output() change = new EventEmitter();

    changeClass(){
        this.icon = !this.icon;
        this.change.emit({ newValue: this.icon });
    }
}