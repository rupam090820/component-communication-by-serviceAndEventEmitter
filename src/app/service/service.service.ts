import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  users = [
    {name: 'John', job: 'Teacher', gender: 'Male', country: 'United States', age: 35, avatar: 'https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png'},
    {name: 'Mark', job: 'Designer', gender: 'Male', country: 'Germany', age: 35, avatar: 'https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg'},
    {name: 'Merry', job: 'Lawyer', gender: 'Female', country: 'Ireland', age: 35, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGU_kta0E3AVnAeYDQ0qRSECBMCzluid3qOMd-aEo&s'},
    {name: 'Steve', job: 'Doctor', gender: 'Male', country: 'India', age: 35, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROruYcJz03hKAVoDqkJsuQuTnLDyvY2fJEYffRoJpwA&s'}
]

//create new event
public event = new EventEmitter();

showDetails(obj:{name: string, job: string, gender: string, country: string, age: number, avatar: string}){
  this.event.emit(obj);
}
}
