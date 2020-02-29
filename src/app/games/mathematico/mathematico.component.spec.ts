import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicoComponent } from './mathematico.component';

describe('MathematicoComponent', () => {
  let component: MathematicoComponent;
  let fixture: ComponentFixture<MathematicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathematicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathematicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
