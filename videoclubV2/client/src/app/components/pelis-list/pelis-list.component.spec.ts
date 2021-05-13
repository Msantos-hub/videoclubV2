import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisListComponent } from './pelis-list.component';

describe('PelisListComponent', () => {
  let component: PelisListComponent;
  let fixture: ComponentFixture<PelisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelisListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
