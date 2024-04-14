import { Component, OnInit } from '@angular/core';
import { Dropdown } from './components/Dropdown/Dropdown.component';
import { NumberInput } from './components/NumberInput/NumberInput.component';
import { Datepicker } from './components/Datepicker/Datepicker.component';
import { CurrencyService } from './services/currency.service';

interface Rates {
  0: string;
  1: { currency_name: string; rate: string; rate_for_amount: string };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [Dropdown, NumberInput, Datepicker],
})
export class AppComponent implements OnInit {
  currencies: any = []; //TODO: any
  rates: Rates[] = [];

  maxDate: Date;

  constructor(private currencyService: CurrencyService) {
    this.maxDate = new Date();
  }

  ngOnInit(): void {
    this.currencyService.getAll().subscribe(currencies => {
      this.currencies = currencies;
      this.rates = Object.entries(this.currencies.rates);
    });
  }
}
