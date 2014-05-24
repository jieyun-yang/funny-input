var app = angular.module('funnyInput', {});

app.directive('funnyInputText', function() {
  return {
    restrict: 'A',
    link: function(scope, ele, attrs) {
      var label = ele.parent().find('label');
      ele.bind('focus', function() {
        label.addClass('active');
        ele.addClass('active');
      });
      ele.bind('blur', function() {
        if (!ele.val()) {
          label.removeClass('active');
          ele.removeClass('active');
        }
      });
    }
  };
});