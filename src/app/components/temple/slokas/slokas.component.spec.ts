import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlokasComponent } from './slokas.component';

describe('SlokasComponent', () => {
  let component: SlokasComponent;
  let fixture: ComponentFixture<SlokasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlokasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlokasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
