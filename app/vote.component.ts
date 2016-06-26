import { Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: "vote",
    template : `
    <div class="div-vote">
        <i 
        class="glyphicon glyphicon-menu-up"
        [class.highlighted]="myVote == 1"
        (click)="upVote()"
        ></i>
        <span>{{ votes + myVote }}</span>
        <i 
        class="glyphicon glyphicon-menu-down"
        [class.highlighted]="myVote == -1"
        (click)="downVote()"
        ></i>
    </div>
    `,
    styles: [`
        .div-vote{
            width: 20px;
            text-align: center;
            font-size: 20px;
            color: #999;
        }
        .glyphicon{
            cursor: pointer
        }
        .highlighted{
            color: green;
        }
    `]
})

export class VoteComponent{
    @Input() votes = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upVote(){
        if (this.myVote == 1) {
            return;
        }
        this.myVote++;
        this.vote.emit({ myVote: this.myVote })
    }

    downVote(){
        if (this.myVote == -1) {
            return;
        }
        this.myVote--;
        this.vote.emit({ myVote: this.myVote })
    }
}