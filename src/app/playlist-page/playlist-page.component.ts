import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from './../local-storage-service.service';

export interface Album {
  name: string;
}

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit {
  public albums?: Album[];


  constructor(private _localStorageService: LocalStorageServiceService) {
  }

  ngOnInit() {
    this.albums = this._localStorageService.hasKey('albums') ? this._localStorageService.getItem('albums') : [];
    this.albums ? this._localStorageService.setTotalAlbums(this.albums.length) : null;
  }

  createAnAlbum(): void {
    const newAlbum = { name: `album n°${Math.random()}` };
    this.albums?.push(newAlbum);
    this._updateLocalStorage();
  }

  removeAnAlbum(): void {
    this.albums?.pop();
    this._updateLocalStorage();
  }

  clearAll(): void {
    this._localStorageService.clear();
  }


  private _updateLocalStorage(): void {
    this._localStorageService.setItem('albums', this.albums);
    this.albums ? this._localStorageService.setTotalAlbums(this.albums.length) : null;
  }

}
