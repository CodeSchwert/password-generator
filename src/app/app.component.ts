import { Component } from '@angular/core';
import { FooComponent } from '@northpower/shared-comp-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordLength = 0;
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClick() {
    console.log('Button was clicked');
    this.password = 'A super secret password!'

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  onChangeCheckBox(property: string) {
    console.log(`change checkbox ${property}`);
    switch (property) {
      case 'letters':
        this.useLetters = !this.useLetters;
        break;
      case 'numbers':
        this.useNumbers = !this.useNumbers;
        break;
      case 'symbols':
        this.useSymbols = !this.useSymbols;
        break;
      default:
        break;
    }
  }

  onChangeLength(target: EventTarget) {
    const value: string = (target as HTMLInputElement).value;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
      console.log(this.passwordLength);
    }
  }
}
