import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homne } from './homne';

describe('Homne', () => {
  let component: Homne;
  let fixture: ComponentFixture<Homne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
