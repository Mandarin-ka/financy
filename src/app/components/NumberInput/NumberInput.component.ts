import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-number',
  templateUrl: 'NumberInput.component.html',
  styleUrl: 'Dropdown.component.scss',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
})
export class NumberInput {}
