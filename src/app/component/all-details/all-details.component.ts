import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent implements OnInit {
 
  constructor(private service:ServiceService) {
    this.service.event.subscribe((item:any)=>{
      //console.log(item);  // recived those object which was send by user component by services
this.recivedUserDetails=item;
//console.log(this.recivedUserDetails);
    })
   }
   recivedUserDetails!: { name: string; job: string; gender: string; country: string; age: number; avatar: string; };

  ngOnInit(): void {
  }

}
