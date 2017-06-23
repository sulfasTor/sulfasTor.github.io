---
layout: sulfastor-homepage
title: Inventario
license: CC BY-ND 4.0
permalink: /inventario/
---

<!DOCTYPE html>
<html ng-app="inventarioApp">
  <head>
    <meta charset="utf-8">
    <title>Inventario</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.debug.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="appCtrl.js" ></script>
    <script src="jspdf.js" ></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">

  <body ng-controller="appCtrl" class="container">
    <h1>Inventario</h1>

    <form ng-submit="addItem(newItem)">

  <table class="table table-striped">
    <thead class="thead-inverse">
      <th ng-repeat="category in categories" class="text-center">
        {{category.name | uppercase}}
      </th>

    <tr ng-repeat="item in items">

      <td class="text-center" ng-show="!shouldShowEditing()">{{item.id}}</td>
      <td class="text-center" ng-show="!shouldShowEditing()">{{item.name | capitalize}}</td>
      <td class="text-center" ng-show="!shouldShowEditing()">{{item.brand | capitalize}}</td>
      <td class="text-center" ng-show="!shouldShowEditing()">{{item.quantity}}</td>

      <td class="text-center" ng-show="shouldShowEditing()">{{item.id}}</td>
      <td ng-show="shouldShowEditing()"><input type="text" class="form-control" ng-model="item.name" value="{{item.name | capitalize}}"></td>
      <td ng-show="shouldShowEditing()"><input type="text" class="form-control" ng-model="item.brand" value="{{item.brand | capitalize}}"></td>
      <td ng-show="shouldShowEditing()"><input type="number" min="1" class="form-control" ng-model="item.quantity" value="{{item.quantity}}"></td>
    </tr>
    <tr ng-show="shouldShowCreating()">
      <td class="text-center">{{items.length + 1}}</td>
      <td><input type="text" class="form-control" ng-model="newItem.name"></td>
      <td><input type="text" class="form-control" ng-model="newItem.brand"></td>
      <td><input type="number" min="1" class="form-control" ng-model="newItem.quantity"></td>
    </tr>
  </thead>
</table>

  <div ng-show="shouldShowCreating()">
    <input type="submit" class="btn" value="Add item">
    <input type="button" class="btn" value="Cancel" ng-click="cancel()">
    <label id="empty"></label>
  </div>

  <div ng-show="shouldShowEditing()">

    <label class="label">Remove item by id</label>
    <input type="number" class="form-control" min="1" max="items.length" ng-model="selectedId">
    <input type="button" class="btn btn-secondary" value="Remove item" ng-click="removeItem(selectedId)"><br />
    <input type="button" class="btn" value="Save" ng-click="stopEditing()">
    <input type="button" class="btn" value="Cancel" ng-click="cancel()">
    <label id="empty" class="label label-default"></label>
  </div>



 <div ng-show="!shouldShowCreating() && !shouldShowEditing()">
   <input type="button" value="Edit" class="btn" ng-click="startEditing()">
   <input type="button" value="Add new item" class="btn" ng-click="startCreating()">
   <input type="button" value="Import to PDF" class="btn" onclick="html2pdf()">
 </div>

</form>



  </body>

</html>
