import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArtcardComponent } from './single-artcard.component';

describe('SingleArtcardComponent', () => {
  let component: SingleArtcardComponent;
  let fixture: ComponentFixture<SingleArtcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleArtcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleArtcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
