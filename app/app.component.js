System.register(['angular2/core', './courses.component', './authors.component', './star.component', './like.component', './vote.component', './tweet.component', './bootstrap.panel.component', './zippy.component', './summary.pipe', './contact-form.component', './signup-form.component', './change-password.component', './spotify.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, star_component_1, like_component_1, vote_component_1, tweet_component_1, bootstrap_panel_component_1, zippy_component_1, summary_pipe_1, contact_form_component_1, signup_form_component_1, change_password_component_1, spotify_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (change_password_component_1_1) {
                change_password_component_1 = change_password_component_1_1;
            },
            function (spotify_component_1_1) {
                spotify_component_1 = spotify_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.viewMode = 'home';
                    this.isActive = false;
                    this.title = "Angular App";
                    this.imagUrl = "http://lorempixel.com/200/200";
                    this.post = {
                        postTitle: "Title",
                        icon: false
                    };
                    this.tweet = {
                        totalLikes: 0,
                        like: false
                    };
                    this.voting = {
                        votes: 9,
                        myVote: 0
                    };
                }
                AppComponent.prototype.onClick = function ($event) {
                    $event.stopPropagation();
                    console.log("clicked", $event);
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log("Handled by Div");
                };
                AppComponent.prototype.onChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/favourite.template.html',
                        styles: ["\n        .nav-pills a{\n            cursor: pointer;\n        }\n    "],
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, star_component_1.StarComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent, tweet_component_1.TweetComponent, bootstrap_panel_component_1.BootstrapPanel, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent, signup_form_component_1.SignUpFormComponent, change_password_component_1.ChangePasswordComponent, spotify_component_1.SpotifyComponent],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map