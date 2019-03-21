import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    },
    {
      path: 'angular',
      component: AngularComponent
    },
    {
      path: '**',
      redirectTo: '404'
    },
    {
      path: '404',
      component: NotFoundComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }