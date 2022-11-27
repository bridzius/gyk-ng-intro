import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaikasComponent } from './vaikas.component';

describe('VaikasComponent', () => {
  let component: VaikasComponent;
  let fixture: ComponentFixture<VaikasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaikasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaikasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
