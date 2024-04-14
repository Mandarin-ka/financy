import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface Rates {
  0: string;
  1: { currency_name: string; rate: string; rate_for_amount: string };
}

@Component({
  selector: 'dropdown',
  templateUrl: 'Dropdown.component.html',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  standalone: true,
})
export class Dropdown {
  @Input() rates: Rates[];
}
