import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCounselingComponent } from './detail-counseling.component';

describe('DetailCounselingComponent', () => {
  let component: DetailCounselingComponent;
  let fixture: ComponentFixture<DetailCounselingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCounselingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
