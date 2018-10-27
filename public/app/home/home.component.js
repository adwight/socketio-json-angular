"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var io = require("socket.io-client");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.selectedOptionValue = 'log';
        this.fromcontrol = 'from control';
        this.createdTables = false;
        this.countSelectOptionChanged = new core_1.EventEmitter();
        // this.socket = io.connect('http://localhost:8000');
        this.socket = io.connect();
    }
    HomeComponent.prototype.onSelectOptionChange = function (value) {
        console.log('change detected');
        console.log(this.dealers[0].test);
        if (this.createdTables == false) {
            this.createdTables = true;
        }
        this.countSelectOptionChanged.emit(value);
        console.log(value);
        //delete previous table
        if (value == "ranking") {
            document.getElementById("ranking").style.display = "block";
            document.getElementById("log").style.display = "none";
        }
        else if (value == "log") {
            document.getElementById("log").style.display = "block";
            document.getElementById("ranking").style.display = "none";
        }
        //display new table
    };
    HomeComponent.prototype.ngOnChanges = function () {
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById("log").style.display = "none";
        this.socket.on('ranking', function (data) {
            console.log('json recieved');
            console.log(data);
            console.log(data[0].test);
            console.log(data[0]["Dealer ID"]);
            _this.dealers = data;
            document.getElementById("ranking").innerHTML +=
                "<table id=\"table\">\n                <thead>\n                    <tr>\n                        <th>Dealer ID</th>\n                        <th>Hands/Hour</th>\n                        <th>Dif From Avg</th>\n                        <th>Total Hands</th>\n                    </tr>\n                </thead>\n                <tbody>\n\n                </tbody>\n            </table>";
            var i;
            var table = document.getElementById("table").getElementsByTagName('tbody')[0];
            for (i = 0; i < _this.dealers.length; i++) {
                var newRow = table.insertRow(i);
                var cell0 = newRow.insertCell(0);
                var cell1 = newRow.insertCell(1);
                var cell2 = newRow.insertCell(2);
                var cell3 = newRow.insertCell(3);
                cell0.innerHTML = _this.dealers[i]["Dealer ID"];
                cell1.innerHTML = _this.dealers[i]["Hands Per Hour"];
                cell2.innerHTML = _this.dealers[i]["Difference from Casino Avg"];
                cell3.innerHTML = _this.dealers[i]["Total Hands"];
            }
        });
        this.socket.on('log', function (data) {
            console.log('log json recieved');
            console.log(data);
            console.log(data[0]["Employee ID"]);
            _this.employees = data;
            document.getElementById("log").innerHTML +=
                "<table id=\"table-log\">\n                <thead>\n                    <tr>\n                        <th>Employee ID</th>\n                        <th>Table</th>\n                        <th>Game</th>\n                        <th>Start Time</th>\n                        <th>End Time</th>\n                        <th>Total TIme</th>\n                        <th>Hands Dealt</th>\n                    </tr>\n                </thead>\n                <tbody>\n\n                </tbody>\n            </table>";
            var i;
            var table = document.getElementById("table-log").getElementsByTagName('tbody')[0];
            for (i = 0; i < _this.employees.length; i++) {
                var newRow = table.insertRow(i);
                var cell0 = newRow.insertCell(0);
                var cell1 = newRow.insertCell(1);
                var cell2 = newRow.insertCell(2);
                var cell3 = newRow.insertCell(3);
                var cell4 = newRow.insertCell(4);
                var cell5 = newRow.insertCell(5);
                var cell6 = newRow.insertCell(6);
                cell0.innerHTML = _this.employees[i]["Employee ID"];
                cell1.innerHTML = _this.employees[i]["Table"];
                cell2.innerHTML = _this.employees[i]["Game"];
                cell3.innerHTML = _this.employees[i]["Start Time"];
                cell4.innerHTML = _this.employees[i]["End Time"];
                cell5.innerHTML = _this.employees[i]["Total Time"];
                cell6.innerHTML = _this.employees[i]["Hands Dealt"];
            }
        });
        this.messages = new Array();
        this.socket.on('message-received', function (msg) {
            _this.messages.push(msg);
            console.log(msg);
            console.log(_this.messages);
        });
        this.socket.emit('event1', {
            msg: 'Client to server, can you hear me server?'
        });
        this.socket.on('event2', function (data) {
            console.log(data.msg);
            _this.socket.emit('event3', {
                msg: 'Yes, its working for me!!'
            });
        });
        this.socket.on('event4', function (data) {
            console.log(data.msg);
        });
    };
    HomeComponent.prototype.sendMessage = function () {
        var message = {
            text: this.messageText
        };
        this.socket.emit('send-message', message);
        // console.log(message.text);
        this.messageText = '';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HomeComponent.prototype, "choice", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], HomeComponent.prototype, "countSelectOptionChanged", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ch-home',
            styleUrls: ['home.styles.css'],
            templateUrl: 'home.template.html'
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map