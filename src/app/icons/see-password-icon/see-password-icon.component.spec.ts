import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePasswordIconComponent } from './see-password-icon.component';

describe('SeePasswordIconComponent', () => {
  let component: SeePasswordIconComponent;
  let fixture: ComponentFixture<SeePasswordIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeePasswordIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeePasswordIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
