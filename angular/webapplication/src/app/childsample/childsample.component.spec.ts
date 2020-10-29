import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsampleComponent } from './childsample.component';

describe('ChildsampleComponent', () => {
  let component: ChildsampleComponent;
  let fixture: ComponentFixture<ChildsampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildsampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
