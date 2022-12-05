import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryArtcardComponent } from './gallery-artcard.component';

describe('GalleryArtcardComponent', () => {
  let component: GalleryArtcardComponent;
  let fixture: ComponentFixture<GalleryArtcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryArtcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryArtcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
