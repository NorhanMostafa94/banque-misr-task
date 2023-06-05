import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from 'src/app/core/interfaces';
import { ConverterService } from 'src/app/modules/home/services/converter.service';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.scss'],
})
export class ConverterFormComponent implements OnInit {
  converterForm: FormGroup = new FormGroup({});

  currencies: string[] = [];

  convertedValue: number = 0;
  exchangeValue: string = '';

  constructor(
    private fb: FormBuilder,
    private convertService: ConverterService
  ) {}

  ngOnInit(): void {
    // this.getCurrencies();
    this.initiateForm();
  }

  /**
   * @description `initiateForm() initiate form group`
   */
  initiateForm(): void {
    this.converterForm = this.fb.group({
      amount: new FormControl(1, [Validators.required]),
      from: new FormControl('EUR', [Validators.required]),
      to: new FormControl('USD', [Validators.required]),
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
    const payload = this.converterForm.value;
    this.convertService
      .convert({ ...payload })
      .subscribe((res: ApiResponse) => {
        this.convertedValue = res.rates[payload.to] * payload.amount;
        this.exchangeValue = `1 ${payload.from} = ${res.rates[payload.to]} ${
          payload.to
        }`;
      });
  }
}
