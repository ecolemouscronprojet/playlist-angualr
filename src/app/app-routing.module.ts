import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { ClasseComponent } from './classe/classe.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/playlist', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent},
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
        LoginComponent,
        RegistrationComponent,
        HeaderComponent
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }