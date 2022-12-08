import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopArtComponent } from './top-art.component';

describe('TopArtComponent', () => {
  let component: TopArtComponent;
  let fixture: ComponentFixture<TopArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
