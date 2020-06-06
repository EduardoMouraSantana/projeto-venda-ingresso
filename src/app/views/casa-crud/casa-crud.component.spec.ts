import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaCrudComponent } from './casa-crud.component';

describe('CasaCrudComponent', () => {
  let component: CasaCrudComponent;
  let fixture: ComponentFixture<CasaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
