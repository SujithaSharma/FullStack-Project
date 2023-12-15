import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhypageComponent } from './whypage.component';

describe('WhypageComponent', () => {
  let component: WhypageComponent;
  let fixture: ComponentFixture<WhypageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhypageComponent]
    });
    fixture = TestBed.createComponent(WhypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
