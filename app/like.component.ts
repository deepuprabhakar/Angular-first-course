import { Component, Input } from 'angular2/core'

@Component({
    selector: "like",
    template : `
        <i 
        class="glyphicon glyphicon-heart"
        [class.highlighted]="likes"
        (click)="likeMe()"
        ></i>
        <span>{{ totalLikes }} likes</span>
        <br/>
    `,
    styles: [`
        .glyphicon-heart{
            color: #ccc;
            cursor: pointer;
        }
        .highlighted{
            color: red;
        }
    `]
})

export class LikeComponent{
    @Input() totalLikes = 0;
    @Input() likes = false; 
    likeMe(){
        this.likes = !this.likes;
        this.totalLikes += this.likes ? 1 : -1;
    }
}