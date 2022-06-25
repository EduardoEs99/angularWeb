import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenderComponent } from './fender.component';

describe('FenderComponent', () => {
  let component: FenderComponent;
  let fixture: ComponentFixture<FenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
