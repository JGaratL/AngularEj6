import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('calculator app is running!');
  });

  it('should have initial values of zero first number', () => {
    expect(component.firstNumber).toBe(0);

    const num1Input: HTMLInputElement = fixture.nativeElement.querySelector('input[type="number"]');

    expect(num1Input.value).toBe('');
  });

  it('should have initial values of zero second number', () => {
    expect(component.secondNumber).toBe(0);

    const num2Input: HTMLInputElement = fixture.nativeElement.querySelectorAll('input[type="number"]')[1];

    expect(num2Input.value).toBe('');
  });

  
  it('should have initial values of zero result', () => {
    expect(component.result).toBe(0);

    const resultSpan: HTMLSpanElement = fixture.nativeElement.querySelector('#result');

    expect(resultSpan.textContent).toBe('0');
  });

  
  
});

