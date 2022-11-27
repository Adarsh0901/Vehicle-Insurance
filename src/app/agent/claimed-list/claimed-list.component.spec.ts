import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimedListComponent } from './claimed-list.component';

describe('ClaimedListComponent', () => {
  let component: ClaimedListComponent;
  let fixture: ComponentFixture<ClaimedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
