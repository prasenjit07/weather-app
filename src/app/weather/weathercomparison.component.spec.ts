import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercomparisonComponent } from './weathercomparison.component';

describe('WeathercomparisonComponent', () => {
  let component: WeathercomparisonComponent;
  let fixture: ComponentFixture<WeathercomparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeathercomparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathercomparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
