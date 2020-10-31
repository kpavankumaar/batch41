import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputboundComponent } from './inputbound.component';

describe('InputboundComponent', () => {
  let component: InputboundComponent;
  let fixture: ComponentFixture<InputboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputboundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
