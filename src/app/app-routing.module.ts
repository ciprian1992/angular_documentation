import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'projection',
    loadChildren: () =>
      import('./features/projection/projection.module').then(
        (m) => m.ProjectionModule
      ),
  },
  {
    path: 'dynamic-components',
    loadChildren: () =>
      import('./features/dynamic-components/dynamic-components.module').then(
        (m) => m.DynamicComponentsModule
      ),
  },
  {
    path: 'custom-elements',
    loadChildren: () =>
      import('./features/custom-elements/custom-elements.module').then(
        (m) => m.CustomElementsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
