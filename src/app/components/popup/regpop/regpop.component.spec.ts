import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpopComponent } from './regpop.component';

describe('RegpopComponent', () => {
  let component: RegpopComponent;
  let fixture: ComponentFixture<RegpopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegpopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
