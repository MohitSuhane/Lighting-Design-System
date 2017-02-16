import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts = [
  {no:"123",name:"Account1"},
  {no:"124",name:"Account2"},
  {no:"125",name:"Account3"},
  {no:"126",name:"Account4"},
  ];

  onSubmit() {
  	this.accounts.push({no:"127",name:""});
  }
}
