import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionhttpComponent } from './peticionhttp.component';

describe('PeticionhttpComponent', () => {
  let component: PeticionhttpComponent;
  let fixture: ComponentFixture<PeticionhttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeticionhttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeticionhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
