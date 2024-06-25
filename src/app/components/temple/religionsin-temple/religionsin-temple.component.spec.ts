import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionsinTempleComponent } from './religionsin-temple.component';

describe('ReligionsinTempleComponent', () => {
  let component: ReligionsinTempleComponent;
  let fixture: ComponentFixture<ReligionsinTempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReligionsinTempleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReligionsinTempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
