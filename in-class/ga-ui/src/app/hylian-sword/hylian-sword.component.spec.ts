import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HylianSwordComponent } from './hylian-sword.component';

describe('HylianSwordComponent', () => {
  let component: HylianSwordComponent;
  let fixture: ComponentFixture<HylianSwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HylianSwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HylianSwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
