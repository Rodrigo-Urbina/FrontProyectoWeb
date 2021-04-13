import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTeachersComponent } from './catalog-teachers.component';

describe('CatalogTeachersComponent', () => {
  let component: CatalogTeachersComponent;
  let fixture: ComponentFixture<CatalogTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
