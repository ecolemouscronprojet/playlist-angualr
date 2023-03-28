import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { ClasseComponent } from './classe/classe.component';

const routes: Routes = [
    { path: '', redirectTo: '/playlist', pathMatch: 'full' },
    { path: 'playlist', component: PlaylistPageComponent },
    { path: 'album', component: AlbumPageComponent },
    { path: 'album/:id', component: AlbumPageComponent },
    { path: 'album/:id/edit', component: AlbumPageComponent },
    { path: 'album/:id/show', component: AlbumPageComponent },
    { path: 'classe/:id', component: ClasseComponent },
];

@NgModule({
    // TODO A CHECK
    declarations:[
        PlaylistPageComponent,
        AlbumPageComponent,
    ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }