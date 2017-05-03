let moment = require('moment')
let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', '$scope', '$interval', '$filter', function(UsersService, $state, $scope, $interval, $filter) {
        'use strict'

        this.dateHour = moment();
        //Initiate the Timer object.
        $scope.Timer = null;

        //Timer start function.
     //    $scope.StartTimer = function() {
            //Set the Timer start message.
            $scope.Message = moment().format('MMM Do YYYY HH:mm:ss');

            //Initialize the Timer to run every 1000 milliseconds i.e. one second.
            $scope.Timer = $interval(function() {
                //Display the current time.
                var time = $filter('date')(moment().format('MMM Do YYYY HH:mm:ss'));
                $scope.Message = time;
            }, 1000);
     //    };
     //    $scope.StartTimer();

        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },
            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }

        })
    }]
}

export default navbar
