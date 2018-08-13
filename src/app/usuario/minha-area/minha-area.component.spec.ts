import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaAreaComponent } from './minha-area.component';

describe('MinhaAreaComponent', () => {
  let component: MinhaAreaComponent;
  let fixture: ComponentFixture<MinhaAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
