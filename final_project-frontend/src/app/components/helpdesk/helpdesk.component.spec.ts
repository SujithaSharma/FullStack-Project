import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskComponent } from './helpdesk.component';

describe('HelpdeskComponent', () => {
  let component: HelpdeskComponent;
  let fixture: ComponentFixture<HelpdeskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpdeskComponent]
    });
    fixture = TestBed.createComponent(HelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
