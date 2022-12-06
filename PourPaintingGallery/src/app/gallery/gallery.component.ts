import { Component, OnInit } from '@angular/core';
import { IArtCard } from 'src/app/models/IArtCard'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  public cards: IArtCard[] = [
    {
      filename: 'IMG-1949',
      name: `Bumfuzzle`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1950',
      name: `Everywhen`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1951',
      name: `Erf`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1955',
      name: `Hullaballoo`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1956',
      name: `Meldrop`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1957',
      name: `Obelus`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1958',
      name: `Sozzled`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1962',
      name: `Bumbershoot`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1964',
      name: `Titter`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1970',
      name: `Smicker`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1971',
      name: `Cleek`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1972',
      name: `Salopettes`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1973',
      name: `Bibliokept`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1974',
      name: `Lollygag`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1976',
      name: `Accubation`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1977',
      name: `Bamboozled`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1978',
      name: `Flabbergast`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1980',
      name: `Foppish`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1981',
      name: `Cattywampus`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1982',
      name: `Noob`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1983',
      name: `Schmooze`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1984',
      name: `Finifugal`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1985',
      name: `Smaze`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1986',
      name: `Skirl`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1987',
      name: `Waesucks`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1988',
      name: `Widdershins`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1990',
      name: `Blubber`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1991',
      name: `Festooned`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1992',
      name: `Gobbledygook`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1993',
      name: `Popple`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1994',
      name: `Hodgepodge`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1995',
      name: `Ramshackle`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1996',
      name: `Wishy-washy`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1997',
      name: `Flummoxed`,
      likes: 0,
      dislikes: 0
    },{
      filename: 'IMG-1998',
      name: `Collywobbles`,
      likes: 0,
      dislikes: 0
    }
  ];

  
  ngOnInit(): void {}

}
