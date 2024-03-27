import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredComponent } from './preferred.component';

describe('PreferredComponent', () => {
  let component: PreferredComponent;
  let fixture: ComponentFixture<PreferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
