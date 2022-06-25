import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshdownComponent } from './ashdown.component';

describe('AshdownComponent', () => {
  let component: AshdownComponent;
  let fixture: ComponentFixture<AshdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
