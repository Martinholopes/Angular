import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchIdComponent } from './hero-search-id.component';

describe('HeroSearchIdComponent', () => {
  let component: HeroSearchIdComponent;
  let fixture: ComponentFixture<HeroSearchIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
