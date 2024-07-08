import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleEventsComponent } from './temple-events.component';

describe('TempleEventsComponent', () => {
  let component: TempleEventsComponent;
  let fixture: ComponentFixture<TempleEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
