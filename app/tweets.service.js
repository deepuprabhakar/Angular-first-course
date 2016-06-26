System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetsService;
    return {
        setters:[],
        execute: function() {
            TweetsService = (function () {
                function TweetsService() {
                    this.tweets = [
                        {
                            author: "John Doe",
                            handle: '@angularjs',
                            body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. ",
                            likes: false,
                            totalLikes: 11
                        },
                        {
                            author: "Don Max",
                            handle: '@laravel',
                            body: " Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
                            likes: false,
                            totalLikes: 10
                        },
                        {
                            author: "Vin Diesel",
                            handle: '@nodejs',
                            body: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. ",
                            likes: true,
                            totalLikes: 9
                        }
                    ];
                }
                TweetsService.prototype.getTweets = function () {
                    return this.tweets;
                };
                return TweetsService;
            }());
            exports_1("TweetsService", TweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map