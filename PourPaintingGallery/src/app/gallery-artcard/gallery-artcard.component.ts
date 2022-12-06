import { Component, Input, OnInit } from '@angular/core';
import { IArtCard } from '../models/IArtCard';

@Component({
  selector: 'app-gallery-artcard',
  templateUrl: './gallery-artcard.component.html',
  styleUrls: ['./gallery-artcard.component.scss']
})
export class GalleryArtcardComponent implements OnInit {

  constructor() { }

  @Input() singleCard!: IArtCard;
  

  ngOnInit(): void {
    
  }
  

}
