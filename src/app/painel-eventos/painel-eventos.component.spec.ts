import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEventosComponent } from './painel-eventos.component';

describe('PainelEventosComponent', () => {
  let component: PainelEventosComponent;
  let fixture: ComponentFixture<PainelEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
