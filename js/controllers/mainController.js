app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.europe = [
  {
    name: 'Berlin',
    description: 'Fabulous adventure in the heart of Germany',
    price: 599.00
  },
  {
    name: 'Venice',
    description: 'Sail the channels in this ancient city of Italy',
    price: 475.00
  },
  {
    name: 'Paris',
    description: 'Live an excellent experience in the city of light',
    price: 720.00
  }];

  $scope.america = [
  {
    name: 'Santiago',
    description: 'Amazing travel in the south of the world',
    price: 450.00
  },
  {
    name: 'Bogota',
    description: 'Wonderful city full of history',
    price: 360.00
  }
  ]
}]);