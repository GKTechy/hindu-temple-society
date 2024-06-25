import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinduismFAQComponent } from './hinduism-faq.component';

describe('HinduismFAQComponent', () => {
  let component: HinduismFAQComponent;
  let fixture: ComponentFixture<HinduismFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HinduismFAQComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HinduismFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
