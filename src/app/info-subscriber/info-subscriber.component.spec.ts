import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSubscriberComponent } from './info-subscriber.component';

describe('InfoSubscriberComponent', () => {
  let component: InfoSubscriberComponent;
  let fixture: ComponentFixture<InfoSubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
