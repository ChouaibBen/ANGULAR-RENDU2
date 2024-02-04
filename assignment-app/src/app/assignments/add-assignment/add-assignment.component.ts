import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { Router } from '@angular/router';

import { Assignment } from '../assignment.model';
import { AssignmentsService } from '../../shared/assignments.service';


@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, CommonModule],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  nomDevoir !: string
  dateDeRendu !: Date

  constructor(private assignmentsService: AssignmentsService, private router: Router) { }

  onSubmit() {
    const newAssignment = new Assignment()
    newAssignment.nom = this.nomDevoir
    newAssignment.dateDeRendu = this.dateDeRendu
    newAssignment.rendu = false
    //this.assignments.push(newAssignment)
    //this.newAssignmentEvent.emit(newAssignment)

    this.assignmentsService.addAssignment(newAssignment)
      .subscribe(message => {
        console.log(message);
      });

    this.router.navigate(['/home'])
  }
}
