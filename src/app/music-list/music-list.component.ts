import { Component, OnInit } from '@angular/core';
import { MusicListService } from './music-list.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  music: any;
  constructor(private musicListService: MusicListService) { }

  ngOnInit(): void {}

  searchSong(value: any) {
    this.musicListService.getMusicList(value).subscribe(music => {
      console.log(music);
      
      this.music = music;
    })
  }

}
