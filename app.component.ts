import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;


  adition() {
    this.result = this.firstNumber + this.secondNumber;
  };

  subtraction() {    
    this.result = this.firstNumber - this.secondNumber;
  };

  multiply() {
    this.result = this.firstNumber * this.secondNumber;
  };

  reset() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.result = 0;
  }
}
