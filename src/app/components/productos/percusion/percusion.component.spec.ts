import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercusionComponent } from './percusion.component';

describe('PercusionComponent', () => {
  let component: PercusionComponent;
  let fixture: ComponentFixture<PercusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
