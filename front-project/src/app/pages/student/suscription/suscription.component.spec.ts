import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscriptionComponent } from './suscription.component';

describe('SuscriptionComponent', () => {
  let component: SuscriptionComponent;
  let fixture: ComponentFixture<SuscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
