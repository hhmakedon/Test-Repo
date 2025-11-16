(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.messageClass = "";
    $scope.inputClass = "";

    $scope.checkLunch = function () {
      // If nothing typed at all
      if (!$scope.lunchItems) {
        setEmptyMessage();
        return;
      }

      // Split by comma
      var items = $scope.lunchItems.split(',');

      // BONUS: filter out empty / spaces-only items
      var validItems = items.filter(function (item) {
        return item.trim().length > 0;
      });

      var count = validItems.length;

      if (count === 0) {
        // User typed only commas/spaces
        setEmptyMessage();
      } else if (count <= 3) {
        setEnjoyMessage();
      } else {
        setTooMuchMessage();
      }
    };

    function setEmptyMessage() {
      $scope.message = "Please enter data first";
      $scope.messageClass = "text-danger";
      $scope.inputClass = "input-error";
    }

    function setEnjoyMessage() {
      $scope.message = "Enjoy!";
      $scope.messageClass = "text-success";
      $scope.inputClass = "input-success";
    }

    function setTooMuchMessage() {
      $scope.message = "Too much!";
      $scope.messageClass = "text-success";
      $scope.inputClass = "input-success";
    }
  }

})();
