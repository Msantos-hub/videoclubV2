import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisInfoComponent } from './pelis-info.component';

describe('PelisInfoComponent', () => {
  let component: PelisInfoComponent;
  let fixture: ComponentFixture<PelisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelisInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
