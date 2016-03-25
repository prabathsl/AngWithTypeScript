var LableApplication;
(function (LableApplication) {
    var LableEditor = (function () {
        function LableEditor() {
        }
        LableEditor.editorModule = angular.module("LableEditor", []);
        return LableEditor;
    })();
    LableApplication.LableEditor = LableEditor;
})(LableApplication || (LableApplication = {}));
