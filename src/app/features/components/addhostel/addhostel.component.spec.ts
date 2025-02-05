import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhostelComponent } from './addhostel.component';

describe('AddhostelComponent', () => {
  let component: AddhostelComponent;
  let fixture: ComponentFixture<AddhostelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddhostelComponent]
    });
    fixture = TestBed.createComponent(AddhostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
