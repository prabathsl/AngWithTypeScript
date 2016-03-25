/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="lableeditor.ts" />
var LableApplication;
(function (LableApplication) {
    var ContentEditTable = (function () {
        function ContentEditTable() {
            this.restrict = "A";
            this.require = "ngModel";
            this.LinkStyle = function (scope, element, attrs, ngModel) {
                function read() {
                    ngModel.$setViewValue(element.html());
                }
                ngModel.$render = function () {
                    element.html(ngModel.$viewValue || "");
                };
                element.bind("blur keyup change", function () {
                    scope.$apply(read);
                });
            };
        }
        ContentEditTable.factory = function () {
            return function () { return new ContentEditTable(); };
        };
        return ContentEditTable;
    })();
    LableApplication.LableEditor.editorModule.directive("contenteditable", ContentEditTable.factory());
})(LableApplication || (LableApplication = {}));
