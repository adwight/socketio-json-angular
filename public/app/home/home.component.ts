import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({

    moduleId: module.id,
    selector: 'ch-home',
    styleUrls: ['home.styles.css'],
    templateUrl: 'home.template.html'

})

export class HomeComponent implements OnInit {

    socket: SocketIOClient.Socket;
    dealers: any[];
    employees: any[];

    onSelectOptionChange(value) {

        if (value=="ranking"){

            document.getElementById("ranking").style.display="block";
            document.getElementById("log").style.display="none";

        }

        else if (value=="log"){

            document.getElementById("log").style.display="block";
            document.getElementById("ranking").style.display="none";

            }

        }

  constructor() {

   // this.socket = io.connect('http://localhost:8000');
   this.socket = io.connect();

  }

  ngOnInit() {
      
        document.getElementById("log").style.display="none";

        this.socket.on('ranking', (data:any) => {

            console.log('json recieved');
            console.log(data);
            console.log(data[0].test);
            console.log(data[0]["Dealer ID"]);
            this.dealers = data;

            document.getElementById("ranking").innerHTML += 
            `<table id="table">
                <thead>
                    <tr>
                        <th>Dealer ID</th>
                        <th>Hands/Hour</th>
                        <th>Dif From Avg</th>
                        <th>Total Hands</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>`

            var i;
            var table = document.getElementById("table").getElementsByTagName('tbody')[0];
            for (i = 0; i < this.dealers.length; i++) {

                var newRow = table.insertRow(i);
                var cell0 = newRow.insertCell(0);
                var cell1 = newRow.insertCell(1);
                var cell2 = newRow.insertCell(2);
                var cell3 = newRow.insertCell(3);

                cell0.innerHTML = this.dealers[i]["Dealer ID"];
                cell1.innerHTML = this.dealers[i]["Hands Per Hour"];
                cell2.innerHTML = this.dealers[i]["Difference from Casino Avg"];
                cell3.innerHTML = this.dealers[i]["Total Hands"];

            }

        })
        
        this.socket.on('log', (data:any) => {

            console.log('log json recieved');
            console.log(data);
            console.log(data[0]["Employee ID"]);
            this.employees = data;

            document.getElementById("log").innerHTML += 
            `<table id="table-log">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Table</th>
                        <th>Game</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Total TIme</th>
                        <th>Hands Dealt</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>`

            var i;
            var table = document.getElementById("table-log").getElementsByTagName('tbody')[0];
            for (i = 0; i < this.employees.length; i++) {
                var newRow = table.insertRow(i);
                var cell0 = newRow.insertCell(0);
                var cell1 = newRow.insertCell(1);
                var cell2 = newRow.insertCell(2);
                var cell3 = newRow.insertCell(3);
                var cell4 = newRow.insertCell(4);
                var cell5 = newRow.insertCell(5);
                var cell6 = newRow.insertCell(6);

                cell0.innerHTML = this.employees[i]["Employee ID"];
                cell1.innerHTML = this.employees[i]["Table"];
                cell2.innerHTML = this.employees[i]["Game"];
                cell3.innerHTML = this.employees[i]["Start Time"];
                cell4.innerHTML = this.employees[i]["End Time"];
                cell5.innerHTML = this.employees[i]["Total Time"];
                cell6.innerHTML = this.employees[i]["Hands Dealt"];

            }

        })

   }  

}
