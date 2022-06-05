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
  {
    path: 'two-way-binding',
    loadChildren: () =>
      import('./features/two-way-binding/two-way-binding.module').then(
        (m) => m.TwoWayBindingModule
      ),
  },
  {
    path: 'structural-directive',
    loadChildren: () =>
      import(
        './features/structural-directive/structural-directive.module'
      ).then((m) => m.StructuralDirectiveModule),
  },
  {
    path: 'dependency-injection',
    loadChildren: () =>
      import(
        './features/dependency-injection/dependency-injection.module'
      ).then((m) => m.DependencyInjectionModule),
  },
  {
    path: 'lightweight-injection-token',
    loadChildren: () =>
      import(
        './features/lightweight-injection-token/lightweight-injection-token.module'
      ).then((m) => m.LightweightInjectionTokenModule),
  },
  { path: 'for-root', loadChildren: () => import('./features/for-root/for-root.module').then(m => m.ForRootModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
