import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerWeek2Component } from './server-week2.component';

describe('ServerWeek2Component', () => {
  let component: ServerWeek2Component;
  let fixture: ComponentFixture<ServerWeek2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerWeek2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerWeek2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
