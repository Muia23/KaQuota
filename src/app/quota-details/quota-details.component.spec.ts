import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotaDetailsComponent } from './quota-details.component';

describe('QuotaDetailsComponent', () => {
  let component: QuotaDetailsComponent;
  let fixture: ComponentFixture<QuotaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
