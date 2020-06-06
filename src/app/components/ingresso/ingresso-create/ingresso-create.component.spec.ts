import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoCreateComponent } from './ingresso-create.component';

describe('IngressoCreateComponent', () => {
  let component: IngressoCreateComponent;
  let fixture: ComponentFixture<IngressoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
