import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckClaimStatusComponent } from './check-claim-status.component';

describe('CheckClaimStatusComponent', () => {
  let component: CheckClaimStatusComponent;
  let fixture: ComponentFixture<CheckClaimStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckClaimStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckClaimStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
