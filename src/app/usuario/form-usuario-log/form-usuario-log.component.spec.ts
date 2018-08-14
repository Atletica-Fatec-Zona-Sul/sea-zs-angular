import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsuarioLogComponent } from './form-usuario-log.component';

describe('FormUsuarioLogComponent', () => {
  let component: FormUsuarioLogComponent;
  let fixture: ComponentFixture<FormUsuarioLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUsuarioLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUsuarioLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
