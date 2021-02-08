import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cat1PagerComponent } from './cat1-pager.component';

describe('Cat1PagerComponent', () => {
  let component: Cat1PagerComponent;
  let fixture: ComponentFixture<Cat1PagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cat1PagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cat1PagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
