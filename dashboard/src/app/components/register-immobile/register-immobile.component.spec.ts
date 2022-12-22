import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterImmobileComponent } from './register-immobile.component';

describe('RegisterImmobileComponent', () => {
  let component: RegisterImmobileComponent;
  let fixture: ComponentFixture<RegisterImmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterImmobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterImmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
