import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmplificadoresComponent } from './amplificadores.component';

describe('AmplificadoresComponent', () => {
  let component: AmplificadoresComponent;
  let fixture: ComponentFixture<AmplificadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmplificadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmplificadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
