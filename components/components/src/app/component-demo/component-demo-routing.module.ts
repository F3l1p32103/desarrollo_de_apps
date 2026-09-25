import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentDemoPage } from './component-demo.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentDemoPageRoutingModule {}
