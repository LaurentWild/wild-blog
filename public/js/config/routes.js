/*
Create Angular config in app.config module
*/
export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
    'use strict'
    // Define prefix
    $locationProvider.hashPrefix('!');
    // For each url not found redirection to '/'
    $urlRouterProvider.otherwise('/posts/');
    /*
      Define a state with name 'app' this state is abstract and url is empty (root of application)
      template is ui-view it's used to display nested views
    */
    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            template: '<navbar /><div class="container"><ui-view></ui-view></div>'
        })
        .state('callback', {
            url: '/auth/callback/:token',
            template: '',
            controller: ['UsersService', '$stateParams', '$state', function(UsersService, $stateParams, $state) {
                if ($stateParams.token) {
                    UsersService.setToken($stateParams.token).then((user) => {
                        let toastContent = `Welcome ${user.name} !`
                        Materialize.toast(toastContent, 4000, 'toast-success')
                        $state.go('blog.list')
                    })
                } else {
                    $state.go('blog.list')
                }
            }]
        })
        .state('algo1', {
            url: '/algo1',
            // template: 'Pas pu le mettre ailleurs que dans la console pour l\'instant ',
            templateUrl: 'js/components/algo/algo1.html',
            controller: ['$stateParams', '$state', '$scope', function($stateParams, $state, $scope) {
                let contacts = ["Ryan", "Kieran", "Mark"];
                let friendsTab = [];
                contacts.forEach(function(element) {
                    if (element.length === 4) {
                        friendsTab.push(element);
                    }
                });
                $scope.friendsTab = friendsTab;
            }]
        })
        .state('algo2', {
            url: '/algo2',
            // template: 'Pas pu le mettre ailleurs que dans la console pour l\'instant ',
            templateUrl: 'js/components/algo/algo2.html',
            controller: ['$stateParams', '$state', '$scope', function($stateParams, $state, $scope) {
                let distance = 14928418679754190000;
                let paper = 0.0001;
                let doneDistance = paper;
                let foldNbr = 0;
                while (paper < distance) {
                    paper = paper * 2;
                    console.log(paper)
                    foldNbr++;
                }
                $scope.foldNbr = foldNbr;
            }]
        })
}]
