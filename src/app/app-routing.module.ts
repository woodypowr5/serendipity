import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ConfiguratorComponent } from './configurator/configurator.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'configure', component: ConfiguratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
