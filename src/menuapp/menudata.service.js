(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$stateParams','$http', 'ApiBasePath']
function MenuDataService($stateParams,$http, ApiBasePath) {
  console.log("MenuDataService kaldt");

  var service = this;
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
      params: {
      }
    });
    console.log("getAllCategories kaldt");
    console.log(response);

    return response;

  };
//   service.getItemsForCategory($stateParams.categoryShortName) = function () {
//     var response = $http({
//       method: "GET",
//       url: (ApiBasePath + "/menu_items.json"),
// //      url: (ApiBasePath + "/categories.json"),
//       params: {
//         category: categoryShortName
//       }
//     });
//     console.log("getItemsForCategories kaldt");
//     console.log(response);
//
//     return response;
//
//   };
}

})();
