import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTelefonoComponent } from './registro-telefono.component';

describe('RegistroTelefonoComponent', () => {
  let component: RegistroTelefonoComponent;
  let fixture: ComponentFixture<RegistroTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTelefonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
