import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroUserHeaderComponent } from './micro-user-header.component';

describe('MicroUserHeaderComponent', () => {
  let component: MicroUserHeaderComponent;
  let fixture: ComponentFixture<MicroUserHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroUserHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
