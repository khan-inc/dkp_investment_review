import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTemplateComponent } from './documentTemplate.component';

describe('DocumentComponent', () => {
  let component: DocumentTemplateComponent;
  let fixture: ComponentFixture<DocumentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
