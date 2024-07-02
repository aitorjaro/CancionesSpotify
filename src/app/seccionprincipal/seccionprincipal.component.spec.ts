import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionprincipalComponent } from './seccionprincipal.component';

describe('SeccionprincipalComponent', () => {
  let component: SeccionprincipalComponent;
  let fixture: ComponentFixture<SeccionprincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionprincipalComponent]
    });
    fixture = TestBed.createComponent(SeccionprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
