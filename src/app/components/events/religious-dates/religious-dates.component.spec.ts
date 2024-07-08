import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiousDatesComponent } from './religious-dates.component';

describe('ReligiousDatesComponent', () => {
  let component: ReligiousDatesComponent;
  let fixture: ComponentFixture<ReligiousDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReligiousDatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReligiousDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
