import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'modal-question',
    loadChildren: () => import('./pages/modal-question/modal-question.module').then( m => m.ModalQuestionPageModule)
  },
  {
    path: 'photo-collection',
    loadChildren: () => import('./pages/photo-collection/photo-collection.module').then( m => m.PhotoCollectionPageModule)
  },
  {
    path: 'info-image',
    loadChildren: () => import('./pages/info-image/info-image.module').then( m => m.InfoImagePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
