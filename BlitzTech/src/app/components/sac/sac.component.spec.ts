import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SACComponent } from './sac.component';

describe('SACComponent', () => {
  let component: SACComponent;
  let fixture: ComponentFixture<SACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SACComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
