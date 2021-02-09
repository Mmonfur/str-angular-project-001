import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat2PagerComponent } from './cat2-pager.component';

describe('Cat2PagerComponent', () => {
  let component: Cat2PagerComponent;
  let fixture: ComponentFixture<Cat2PagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat2PagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat2PagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
