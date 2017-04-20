import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextComponentComponent } from './rich-text-component.component';

describe('RichTextComponentComponent', () => {
  let component: RichTextComponentComponent;
  let fixture: ComponentFixture<RichTextComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichTextComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
