import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModuleComponent } from './user-module.component';

describe('UserModuleComponent', () => {
  let component: UserModuleComponent;
  let fixture: ComponentFixture<UserModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
