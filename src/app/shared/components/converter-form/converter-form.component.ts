import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// interface
import { ApiResponse } from 'src/app/core/interfaces';

// services
import { ConverterService } from '../../services/converter.service';
import { Currency } from '../../enums';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.scss'],
})
export class ConverterFormComponent implements OnInit, OnChanges {
  converterForm: FormGroup = new FormGroup({});

  convertedValue: number = 0;
  exchangeValue: string = '';

  currencies: string[] = [];

  @Input() from: string = Currency.EUR;
  @Input() to: string = Currency.GBP;
  @Input() amount: number = 1;

  @Input() fromDisabled: boolean = false;
  @Input() showDetailsButton: boolean = true;

  @Output() amountValue = new EventEmitter<number>();

  constructor(
    private fb: FormBuilder,
    private convertService: ConverterService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.initiateForm();
    this.convert();
  }

  ngOnInit(): void {
    this.getCurrencies();
    this.initiateForm();
  }

  /**
   * @description `initiateForm() initiate form group`
   */
  initiateForm(): void {
    this.converterForm = this.fb.group({
      amount: new FormControl(this.amount, [Validators.required]),
      from: new FormControl({ value: this.from, disabled: this.fromDisabled }, [
        Validators.required,
      ]),
      to: new FormControl(this.to, [Validators.required]),
    });
  }

  /**
   * @description `getControl() to get form control from formgroup`
   * @param formControlName {string}
   * @returns {AbstractControl}
   */
  getControl(formControlName: string): AbstractControl | null {
    return this.converterForm.get(formControlName);
  }

  /**
   * @description `getCurrencies() to get currencies list`
   */
  getCurrencies(): void {
    this.convertService.getCurrencies().subscribe((res: ApiResponse) => {
      this.currencies = Object.keys(res.rates);
      this.convertedValue = res.rates.USD;
      this.exchangeValue = `1 Euro = ${this.convertedValue} USD`;
      this.convert();
    });
  }

  /**
   * @description `exchange()` to exchange from and to values
   */
  exchange(): void {
    const fromControl = this.getControl('from');
    const toControl = this.getControl('to');
    const fromValue = fromControl?.value;
    const toValue = toControl?.value;
    fromControl?.setValue(toValue);
    toControl?.setValue(fromValue);
  }

  /**
   * @description `convert() to convert currencies`
   */
  convert(): void {
    const payload = this.converterForm.getRawValue();
    debugger;
    this.amountValue.emit(payload.amount);
    this.convertService
      .convert({ ...payload })
      .subscribe((res: ApiResponse) => {
        this.convertedValue = res.rates[payload.to] * payload.amount;
        this.exchangeValue = `1 ${payload.from} = ${res.rates[payload.to]} ${
          payload.to
        }`;
      });
  }

  moreDetails(): void {
    const amount = this.getControl('amount')?.value;
    const from = this.getControl('from')?.value;
    const to = this.getControl('to')?.value;
    this.router.navigate(['details'], {
      queryParams: { amount, from, to, currency: from },
    });
  }
}
