export class TweetsService{
    tweets = [
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
    
    getTweets(){
        return this.tweets;
    }
}