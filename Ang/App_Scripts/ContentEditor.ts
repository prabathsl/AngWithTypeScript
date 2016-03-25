/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="lableeditor.ts" />

module LableApplication {
    class ContentEditTable implements ng.IDirective {
        static factory(): ng.IDirectiveFactory {
            return () => new ContentEditTable();
        }
        restrict = "A";
        require = "ngModel";
        LinkStyle = (scope: ng.IScope, element: ng.IRootElementService, attrs: any, ngModel: ng.INgModelController) =>
        {
            function read() {
                ngModel.$setViewValue(element.html());
            }

            ngModel.$render = function()
            {
                element.html(ngModel.$viewValue || "");
            }

            element.bind("blur keyup change", function () {            
                scope.$apply(read);           
            })
       }
    }
    LableEditor.editorModule.directive("contenteditable", ContentEditTable.factory());
}