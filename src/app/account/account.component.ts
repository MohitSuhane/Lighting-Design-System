import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
	
  new: string;		
  constructor() {
  this.new = ""; }

  ngOnInit() {
  }

  accounts = [
  {no:"123",name:"Account1"},
  {no:"124",name:"Account2"},
  {no:"125",name:"Account3"},
  {no:"126",name:"Account4"},
  ];

  onSubmit() {
  	this.accounts.push({no:"127",name:this.new});
  }  

}
