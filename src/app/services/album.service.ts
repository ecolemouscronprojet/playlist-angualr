import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from '../local-storage-service.service';
import { v4 as uuidv4 } from 'uuid';


export interface Album {
  id: string | null,
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private _albums: Album[] = [];


  constructor(
    private _localStorageService: LocalStorageServiceService
  ) {
    this._albums = this._localStorageService.hasKey('albums') ? this._localStorageService.getItem('albums') : [];
  }

  getAll(): Album[] {
    return this._albums;
  }

  get(id: string): Album | undefined {
    return this._albums.find(a => a.id === id);
  }

  save(album: Album): Album {
    album.id = album.id ?? uuidv4();

    const index = this._albums.findIndex(a => a.id === album.id);
    if (index !== -1) {
      this._albums[index] = { ...this._albums[index], ...album };
    } else {
      this._albums.push(album);
    }
    this._updateLocalStorage();
    return album;
  }

  delete(id: string): boolean {
    let result = false;
    const index = this._albums.findIndex(a => a.id === id);
    if (index !== -1) {
      this._albums.splice(index, 1);
      this._updateLocalStorage();
      result = true;
    }

    return result;
  }

  private _updateLocalStorage(): void {
    this._localStorageService.setItem('albums', this._albums);
  }
}
