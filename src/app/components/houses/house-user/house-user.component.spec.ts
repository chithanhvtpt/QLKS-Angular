import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseUserComponent } from './house-user.component';

describe('HouseUserComponent', () => {
  let component: HouseUserComponent;
  let fixture: ComponentFixture<HouseUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
