app = angular.module("inventarioApp", [

]);
app.controller("appCtrl", function ($scope) {

  $scope.categories = [
    {"id":1, "name": "id"},
    {"id":2, "name": "name"},
    {"id":3, "name": "brand"},
    {"id":4, "name": "quantity"}
];

  $scope.items = [
    {"id":1, "name": "plumon", "brand": "pelican", "quantity": 5},
    {"id":2, "name": "pizarra", "brand": "sin marca", "quantity": 2},
    {"id":3, "name": "cuaderno ", "brand": "mead", "quantity": 10},
    {"id":4, "name": "crayolas", "brand": "fiber castell", "quantity": 20},
    {"id":5, "name": "jabon", "brand": "jabonzote", "quantity": 7}
  ];
  $scope.selectedId = 0;
  $scope.isCreating = false;
  $scope.isEditing = false;

  function resetCreateForm(){
    $scope.newItem = {
      "name": '',
      "brand": '',
      "quantity": 0
    };
  }

  function removeItem(val){
    if(val > 0){
      $scope.items.splice(val-1,1);
      $scope.selectedId = 0;
    }
  }

  function addItem(newItem){
    newItem.id = $scope.items.length + 1;
    if (newItem.name !== '' && newItem.brand !== '') {
        $scope.items.push(newItem);
        resetCreateForm();
        document.getElementById("empty").innerHTML="";
    }
    else {
      document.getElementById("empty").innerHTML="Camps are empty!";
    }
  }

  function shouldShowEditing(){
    return $scope.isEditing === true && $scope.isCreating === false ;
  }


  function shouldShowCreating(){
    return $scope.isCreating === true && $scope.isEditing === false;
  }

  function startCreating(){
    $scope.isCreating = true;
    $scope.isEditing = false;
    resetCreateForm();
  }

  function startEditing(){
    $scope.isEditing = true;
    $scope.isCreating = false;
  }

  function stopEditing(){
    $scope.isEditing = false;
  }


  function cancel(){
    $scope.isCreating = false;
    $scope.isEditing = false;
  }

  $scope.startCreating = startCreating;
  $scope.startEditing= startEditing;
  $scope.shouldShowCreating = shouldShowCreating;
  $scope.shouldShowEditing= shouldShowEditing;
  $scope.stopEditing = stopEditing;
  $scope.cancel = cancel;
  $scope.addItem = addItem;
  $scope.removeItem = removeItem;


});

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
