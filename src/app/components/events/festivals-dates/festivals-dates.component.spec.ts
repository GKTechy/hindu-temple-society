import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalsDatesComponent } from './festivals-dates.component';

describe('FestivalsDatesComponent', () => {
  let component: FestivalsDatesComponent;
  let fixture: ComponentFixture<FestivalsDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivalsDatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivalsDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
