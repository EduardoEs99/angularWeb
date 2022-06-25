import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntcuerdaComponent } from './intcuerda.component';

describe('IntcuerdaComponent', () => {
  let component: IntcuerdaComponent;
  let fixture: ComponentFixture<IntcuerdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntcuerdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntcuerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
