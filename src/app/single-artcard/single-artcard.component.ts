import { Component, Input, OnInit } from '@angular/core';
import { IArtCard } from '../models/IArtCard';

@Component({
  selector: 'app-single-artcard',
  templateUrl: './single-artcard.component.html',
  styleUrls: ['./single-artcard.component.scss']
})
export class SingleArtcardComponent implements OnInit {

  @Input() singleArt!: IArtCard;
  
  constructor() { }

  ngOnInit(): void {
  }

}
