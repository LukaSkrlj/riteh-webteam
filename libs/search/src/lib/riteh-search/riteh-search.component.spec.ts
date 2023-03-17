import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitehSearchComponent } from './riteh-search.component';

describe('RitehSearchComponent', () => {
  let component: RitehSearchComponent;
  let fixture: ComponentFixture<RitehSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RitehSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RitehSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
