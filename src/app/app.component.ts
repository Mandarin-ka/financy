import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'financy';
  currencies: any = []; //TODO: any

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService
      .getAll()
      .subscribe(currencies => (this.currencies = currencies));
  }
}
