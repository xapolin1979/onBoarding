import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsceneComponent } from './escene.component';

describe('EsceneComponent', () => {
  let component: EsceneComponent;
  let fixture: ComponentFixture<EsceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsceneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
