import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})
export class AppComponent {
  title = 'myapp';
  text: string;
  emp: any[];

constructor(private _myservice: MyserviceService, router: Router) {}
student() {
  this.router.navigate(['/student']);
}
studentdetail() {
  this.router.navigate(['/studentdetails']);
}
studenthistory() {
  this.router.navigate(['/studenthistory']);
}

ngOnInit() {
  this.text = this._myservice.display();
  this.emp = this._myservice.employees;
}


}


