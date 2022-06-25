import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbanezComponent } from './ibanez.component';

describe('IbanezComponent', () => {
  let component: IbanezComponent;
  let fixture: ComponentFixture<IbanezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbanezComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbanezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
