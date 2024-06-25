import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleHoursComponent } from './temple-hours.component';

describe('TempleHoursComponent', () => {
  let component: TempleHoursComponent;
  let fixture: ComponentFixture<TempleHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleHoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempleHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
