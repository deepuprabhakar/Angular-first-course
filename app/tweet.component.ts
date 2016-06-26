import { Component } from 'angular2/core'
import { LikeComponent } from './like.component'
import { TweetsService } from './tweets.service'
import { SummaryPipe } from './summary.pipe'

@Component({
    selector: "tweets",
    templateUrl: 'app/tweets.template.html',
    directives: [LikeComponent],
    providers: [TweetsService],
    pipes: [SummaryPipe]
})

export class TweetComponent{
    tweets = [];

    constructor(tweetsService: TweetsService){
        this.tweets = tweetsService.getTweets();
    }
}