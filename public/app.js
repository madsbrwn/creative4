angular.module('News', ['ui.router'])
    .factory('postFactory', [function(){
      var o = {
        posts: []
      };
      return o;
    }])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
          })
          .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostCtrl'
          })
        $urlRouterProvider.otherwise('home');
    }])
    .controller('MainCtrl', [
      '$scope',
      'postFactory',    
      function($scope, postFactory){
        $scope.posts = postFactory.posts; 
        $scope.addPost = function() {
          var url;
	  var num = Math.floor(Math.random() * 3) + 1;
            if (num === 1) url = "https://uproxx.files.wordpress.com/2013/05/creedbratton-creedthoughts-1.gif?w=650";
            else if (num === 2) url = "https://i.imgur.com/90akEXq.gif";
            else if (num === 3) url = "https://i.pinimg.com/originals/23/4f/2f/234f2fe11f1a71b058ab19d9a3d0801a.jpg";

	$scope.posts.push({
	  title:$scope.formContent,
          upvotes:0,
          comments:[],
	  img:{url}
        });
	console.log(url);
        $scope.title='';
      };
      $scope.incrementUpvotes = function(post) {
         post.upvotes += 1;
       };
     }
    ])
    .controller('PostCtrl', [
      '$scope',
      '$stateParams',
      'postFactory', 
      function($scope, $stateParams, postFactory){
        $scope.post = postFactory.posts[$stateParams.id];
        $scope.addComment = function(){
          if($scope.body === '') { return; }
          $scope.post.comments.push({
            body: $scope.body,
            upvotes: 0
          });
          $scope.body = '';
        };
      $scope.incrementUpvotes = function(comment){
        comment.upvotes += 1; 
      };
    }]);
