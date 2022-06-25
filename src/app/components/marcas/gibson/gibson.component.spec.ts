import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GibsonComponent } from './gibson.component';

describe('GibsonComponent', () => {
  let component: GibsonComponent;
  let fixture: ComponentFixture<GibsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GibsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GibsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
