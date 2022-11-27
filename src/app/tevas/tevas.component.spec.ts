import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TevasComponent } from './tevas.component';

describe('TevasComponent', () => {
  let component: TevasComponent;
  let fixture: ComponentFixture<TevasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TevasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TevasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
