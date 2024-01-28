import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploComponentComponent } from './emplo-component.component';

describe('EmploComponentComponent', () => {
  let component: EmploComponentComponent;
  let fixture: ComponentFixture<EmploComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmploComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmploComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
