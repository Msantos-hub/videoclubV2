import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisFormComponent } from './pelis-form.component';

describe('PelisFormComponent', () => {
  let component: PelisFormComponent;
  let fixture: ComponentFixture<PelisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelisFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
