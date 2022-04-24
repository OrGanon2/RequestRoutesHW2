import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxsComponent } from './foxs.component';

describe('FoxsComponent', () => {
  let component: FoxsComponent;
  let fixture: ComponentFixture<FoxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
