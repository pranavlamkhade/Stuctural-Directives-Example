import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudenthistoryComponent } from './studenthistory/studenthistory.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentregistationComponent } from './studentregistation/studentregistation.component';


const routes: Routes = [
  {
    path: 'student',
    children: [
      {path: '', component: StudentComponent},
      {
        path: 'studentdetails', component: StudentdetailsComponent
      },
      {
        path: 'studentregistation', component: StudentregistationComponent
      },
    ]
  },
  {
    path: 'studenthistory', component: StudenthistoryComponent
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
