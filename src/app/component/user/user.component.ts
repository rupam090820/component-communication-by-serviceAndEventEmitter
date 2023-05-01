import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
// declare a local data member like our service and assign a blank array
  user:{name: string, job: string, gender: string, country: string, age: number, avatar: string}[]=[];
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.user=this.service.users; // get all data and store into user variable

}
ShowDetails(a:{name: string, job: string, gender: string, country: string, age: number, avatar: string}){
// console.log(a); // here getting all details
this.service.showDetails(a);
}
}