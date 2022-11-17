import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m =>
      m.LoginPageModule),
      canLoad: [AutoLoginGuard]
  },
  {
    path: 'barang',
    loadChildren: () => import('./barang/barang.module').then( m => m.BarangPageModule)
  },
  {
    path: 'barang-tambah',
    loadChildren: () => import('./barang-tambah/barang-tambah.module').then( m => m.BarangTambahPageModule)
  },
  {
    path: 'barang-edit',
    loadChildren: () => import('./barang-edit/barang-edit.module').then( m => m.BarangEditPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
