import { Component, Input } from 'angular2/core';

@Component({
    selector: "zippy",
    template : `
    <div class="zippy">
        <div
            class="zippy-title"
            (click)="toggle()">
        {{ ztitle }}
        <i
            class="pull-right glyphicon"
            [ngClass]="
            {
                'glyphicon-chevron-down': !isExpanded,
                'glyphicon-chevron-up': isExpanded
            }
            ">
        </i>
        </div>
        <div *ngIf="isExpanded" class="zippy-content">
            <ng-content></ng-content>
        </div> 
    </div>
    `,
    styles: [`
        .zippy-title,  .zippy-content {
            padding: 10px;
            border: 1px solid #EAE9E9;
            border-radius: 2px;
        }
        .zippy-title:hover{
            curson: pointer;
        }
        .zippy{
            margin-bottom: 15px;
        }
    `] 
})

export class ZippyComponent{
    isExpanded = false;
    @Input() ztitle: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}