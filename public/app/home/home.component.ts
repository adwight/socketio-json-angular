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

    //When dropdown value changes, display chosen data - hide the rest
    onSelectOptionChange(value) {

        if (value=="ranking"){

            document.getElementById("ranking").style.display="flex";
            document.getElementById("log").style.display="none";

        }

        else if (value=="log"){

            document.getElementById("log").style.display="flex";
            document.getElementById("ranking").style.display="none";

            }

        }

  constructor() {

   // this.socket = io.connect('http://localhost:8000');
   this.socket = io.connect();

  }

  ngOnInit() {
      
        //Hide dealer Log be default, so only Ranking data shows
        document.getElementById("log").style.display="none";

        this.socket.on('ranking', (data:any) => {

            //Assign Ranking JSON to dealers
            this.dealers = data;

            //Generate table based on Ranking data if not yet present
            if (document.getElementById("ranking").hasChildNodes()===false){
                
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

            } //end if

        })
        
        this.socket.on('log', (data:any) => {

            //Assign Log JSON to dealers
            this.employees = data;

            //Generate table based on Log data if not yet present
            if (document.getElementById("log").hasChildNodes()===false){
                
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

           } //end if

        })

   }  

}
