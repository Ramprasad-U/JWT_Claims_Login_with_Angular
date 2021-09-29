import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespMsgComponent } from './resp-msg.component';

describe('RespMsgComponent', () => {
  let component: RespMsgComponent;
  let fixture: ComponentFixture<RespMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
