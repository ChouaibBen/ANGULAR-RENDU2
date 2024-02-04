import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule} from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { Assignment } from './assignment.model';
import { RenduDirective } from '../shared/rendu.directive';
import { AssignmentsService } from '../shared/assignments.service';
import { MatToolbar } from "@angular/material/toolbar";
import { MatSidenavContainer } from "@angular/material/sidenav";

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, MatButtonModule, MatIconModule, MatNativeDateModule, MatListModule, MatDividerModule, RouterModule, MatToolbar, MatSidenavContainer],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {

  ngOnInit(): void {
    //this.assignments = this.assignmentsService.getAssignments()
    this.getAssignments();
  }

  getAssignments(): void {
    this.assignmentsService.getAssignments()
      .subscribe(a => this.assignments = a);
  }

  constructor(private assignmentsService: AssignmentsService) { }


  titre = 'mon application sur les assignments'
  assignments !: Assignment[]

}
