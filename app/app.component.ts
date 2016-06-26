import {Component, Input} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {StarComponent} from './star.component'
import {LikeComponent} from './like.component'
import {VoteComponent} from './vote.component'
import {TweetComponent} from './tweet.component'
import {BootstrapPanel} from './bootstrap.panel.component'
import {ZippyComponent} from './zippy.component'
import {SummaryPipe} from './summary.pipe'
import {ContactFormComponent} from './contact-form.component'
import {SignUpFormComponent} from './signup-form.component'
import {ChangePasswordComponent} from './change-password.component'
import {SpotifyComponent} from './spotify.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/favourite.template.html',
    styles: [`
        .nav-pills a{
            cursor: pointer;
        }
    `],
    directives: [CoursesComponent, AuthorsComponent, StarComponent, LikeComponent, VoteComponent, TweetComponent, BootstrapPanel, ZippyComponent, ContactFormComponent, SignUpFormComponent, ChangePasswordComponent, SpotifyComponent],
    pipes: [SummaryPipe]
})
export class AppComponent {
    viewMode = 'home';
    isActive = false;
    title = "Angular App";
    imagUrl = "http://lorempixel.com/200/200"; 

    post = {
        postTitle: "Title",
        icon: false 
    }

    tweet = {
        totalLikes: 0,
        like: false
    }

    voting = {
        votes: 9,
        myVote: 0
    }

    onClick($event){
        $event.stopPropagation();
        console.log("clicked", $event);
    }  

    onDivClick(){
        console.log("Handled by Div");
    }
    onChange($event){
        console.log($event);
    }
    onVote($event){
        console.log($event);
    }
}