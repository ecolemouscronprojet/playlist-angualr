import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/playlist', pathMatch: 'full' },
    { path: 'playlist', component: PlaylistPageComponent },
    { path: 'album', component: AlbumPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }