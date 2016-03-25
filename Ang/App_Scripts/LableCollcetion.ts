/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="lableeditor.ts" />

module LableApplication {
    export class LableColection {
        constructor(private $scope: ng.IScope) {
            
        }
        sequence = [{ "Id": 1, "Name": "Saman" },
            { "Id": 2, "Name": "Piyal" },
            { "Id": 3, "Name": "Nimal" },
            { "Id": 4, "Name": "Amal" },
            { "Id": 5, "Name": "Chamal" },
            { "Id": 6, "Name": "Saman1" },
            { "Id": 7, "Name": "Kamal" }];
    }

    LableEditor.editorModule.controller("LableColection", ["$scope", LableColection]);
}
