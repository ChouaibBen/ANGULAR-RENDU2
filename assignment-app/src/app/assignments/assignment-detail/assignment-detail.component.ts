import { Component,  OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatButtonModule, RouterLink , NgIf ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {

  assignmentTransmis !: Assignment;

  constructor(private assignmentsService: AssignmentsService,
              private  activatedRoute: ActivatedRoute,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.getAssignment()
    this.authService.isAdmin().then(isAdmin=>{
      // @ts-ignore
      this.isAdmin = isAdmin;
    });
  }

  getAssignment(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.assignmentsService.getAssignment(id)
      .subscribe(a => {
        if (a) {
          this.assignmentTransmis = a;
        }
      });
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => {
        console.log(message);
      });

    this.router.navigate(['/home'])
  }

  deleteElem() {
    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe(message => {
        console.log(message);
      });
    this.router.navigate(['/home'])
  }

  onClickEdit() {
    this.router.navigate(
      ['/assignment', this.assignmentTransmis.id, 'edit'],
      {
        queryParams: { nom: this.assignmentTransmis.nom },
        fragment: 'edition'
      }
    );
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

}
