import { Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
import {LoginComponent} from "./assignments/login/login.component";



export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AssignmentsComponent},
  {path: 'add', component: AddAssignmentComponent, canActivate: [authGuard], data: { role: 'user' } },
  {path: 'assignment/:id', component: AssignmentDetailComponent, canActivate: [authGuard], data: { role: 'user' } },
  {path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate: [authGuard], data: { role: 'admin' } },
  {path: 'login', component: LoginComponent}
];
