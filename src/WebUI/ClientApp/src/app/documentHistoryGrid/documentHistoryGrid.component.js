"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentHistoryGridComponent = void 0;
var core_1 = require("@angular/core");
var DocumentHistoryGridComponent = /** @class */ (function () {
    function DocumentHistoryGridComponent() {
        this.data = [
            { "title": "Benchmark Return", "template": "Template 1 - Instance 1", "date": "01/01/2021" },
            { "title": "Annual Report: ABC", "template": "Template 1 - Instance 2", "date": "02/02/2021" },
            { "title": "Annual Report: XYZ", "template": "Template 2 - Instance 1", "date": "03/03/2021" },
            { "title": "2020 Sales History", "template": "Template 2 - Instance 2", "date": "04/04/2021" }
        ];
    }
    DocumentHistoryGridComponent.prototype.ngOnInit = function () { };
    ;
    DocumentHistoryGridComponent = __decorate([
        core_1.Component({
            selector: 'app-document-history',
            templateUrl: './documentHistoryGrid.component.html'
        })
    ], DocumentHistoryGridComponent);
    return DocumentHistoryGridComponent;
}());
exports.DocumentHistoryGridComponent = DocumentHistoryGridComponent;
//# sourceMappingURL=documentHistoryGrid.component.js.map