import { Component, OnInit } from '@angular/core';
import { Dropdown } from './components/Dropdown/Dropdown.component';
import { NumberInput } from './components/NumberInput/NumberInput.component';
import { Datepicker } from './components/Datepicker/Datepicker.component';
import { CurrencyService } from './services/currency.service';

interface Rate {
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
  rates: Rate[] = [];
  img: string;

  protected currentRate1: string;
  protected currentRate2: string;

  protected currentValue1: string;
  protected currentValue2: string;

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

  onRate1Change(e: any) {
    this.currentRate1 = e.target.textContent;

    const country = e.target.textContent.slice(0, 2);
    this.img = `https://flagsapi.com/${country}/flat/48.png`;
  }

  onRate2Change(e: any) {
    this.currentRate2 = e.target.textContent;

    const country = e.target.textContent.slice(0, 2);
    this.img = `https://flagsapi.com/${country}/flat/48.png`;
  }

  onValue1Change(e: any) {
    this.currentValue1 = e.target.value;
    console.log(
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode
    );
    console.log(this.currentValue1, this.currentValue2);
  }

  onValue2Change(e: any) {
    this.currentValue2 = e.target.value;
    console.log(this.currentValue1, this.currentValue2);
  }
}
