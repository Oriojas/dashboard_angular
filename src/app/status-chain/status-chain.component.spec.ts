import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusChainComponent } from './status-chain.component';

describe('StatusChainComponent', () => {
  let component: StatusChainComponent;
  let fixture: ComponentFixture<StatusChainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusChainComponent]
    });
    fixture = TestBed.createComponent(StatusChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
