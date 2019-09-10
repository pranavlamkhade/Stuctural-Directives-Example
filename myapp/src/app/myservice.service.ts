import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
employees: any[];
  constructor() {
    this.employees = [
      {
        empcode: '001', name: 'pranav lamkhade'
      },
      {
        empcode: '002', name: 'Ankush raut'
      }
    ];
  }
  display() {
    return 'hello this is service Example';
  }

}
