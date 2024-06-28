import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleReligionsComponent } from './temple-religions.component';

describe('TempleReligionsComponent', () => {
  let component: TempleReligionsComponent;
  let fixture: ComponentFixture<TempleReligionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleReligionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempleReligionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
