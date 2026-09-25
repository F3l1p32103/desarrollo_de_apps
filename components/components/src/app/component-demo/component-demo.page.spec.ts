import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentDemoPage } from './component-demo.page';

describe('ComponentDemoPage', () => {
  let component: ComponentDemoPage;
  let fixture: ComponentFixture<ComponentDemoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
