import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasPage } from './mas.page';

describe('MasPage', () => {
  let component: MasPage;
  let fixture: ComponentFixture<MasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
