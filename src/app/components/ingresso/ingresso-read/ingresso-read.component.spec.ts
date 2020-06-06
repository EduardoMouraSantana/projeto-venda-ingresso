import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngressoReadComponent } from './ingresso-read.component';

describe('IngressoReadComponent', () => {
  let component: IngressoReadComponent;
  let fixture: ComponentFixture<IngressoReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressoReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
