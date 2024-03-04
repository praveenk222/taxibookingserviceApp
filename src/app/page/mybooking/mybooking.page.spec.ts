import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MybookingPage } from './mybooking.page';

describe('MybookingPage', () => {
  let component: MybookingPage;
  let fixture: ComponentFixture<MybookingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MybookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
