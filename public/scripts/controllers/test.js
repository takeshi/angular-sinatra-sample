'use strict';

angular.module('first')
  .controller('TestCtrl', function ($scope) {
	$scope.myData = [{name: 'Moroni', age: 50},
                 {name: 'Tiancum', age: 43},
                 {name: 'Jacob', age: 27},
                 {name: 'Nephi', age: 29},
                 {name: 'Enos', age: 34}];
    $scope.gridOptions = { data: 'myData',
		enableCellSelection: true,
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        columnDefs:
           [{field: 'name', 
            displayName: 'Name',
            enableCellEdit: true}, 
            {field:'age',
             displayName:'Age',
             cellTemplate: 'views/selectTemplate.html'}
          ]
        };


 $scope.statuses2 = ['online','offline'];
    $scope.myData2 = [
      {name: "Moroni", age: 50, myStatus: 'online'},
      {name: "Tiancum", age: 43, myStatus: 'offline'},
      {name: "Jacob", age: 27, myStatus: 'online'},
      {name: "Nephi", age: 29, myStatus: 'online'},
      {name: "Enos", age: 34, myStatus: 'online'}];

    $scope.gridOptions2 = { 
        data: 'myData2',
        enableCellSelection: true,
        enableRowSelection: false,
        // enableCellEditOnFocus: true,
        columnDefs: [{field: 'name', displayName: 'Name',enableCellEdit: true},
                     {field:'myStatus', displayName:'Status', cellTemplate: 'views/cellTemplate.html'}]
        };
    $scope.sels = [];

  });
