angular.module('userProfile', ['ngMaterial', 'ngMessages'])
  .controller('Ctrl', function($scope) {
    $scope.viewMode = true;
  
    // Switch between view mode and edit mode
    $scope.switchMode = function() {
      return $scope.viewMode = !$scope.viewMode;
    };
  
    // Save the changes
    $scope.saveChanges = function() {
      /*Validate the input
      Save the changes*/
    };
  
    // User data
    $scope.user = {
      name: 'Adam Luxor',
      title: 'VP of User Experience',
      department: 'Product',
      location: 'Atlanta',
      company: 'BetterCloud',
      manager: 'Emily Morgan',
      workPhone: '404-555-1212',
      mobilePhone: '404-555-6789',
      alias: 'adam.luxor@companyname.com',
      otherEmail: 'adaml@someothercompany.com'
    }
  });