import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPolicyComponent } from './claim-policy.component';

describe('ClaimPolicyComponent', () => {
  let component: ClaimPolicyComponent;
  let fixture: ComponentFixture<ClaimPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
