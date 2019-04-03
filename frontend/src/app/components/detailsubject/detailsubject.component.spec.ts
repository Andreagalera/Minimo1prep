import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsubjectComponent } from './detailsubject.component';

describe('DetailsubjectComponent', () => {
  let component: DetailsubjectComponent;
  let fixture: ComponentFixture<DetailsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
