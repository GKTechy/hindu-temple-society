import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleMilestonesComponent } from './temple-milestones.component';

describe('TempleMilestonesComponent', () => {
  let component: TempleMilestonesComponent;
  let fixture: ComponentFixture<TempleMilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleMilestonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempleMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
