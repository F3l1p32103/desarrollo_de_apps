import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ComponentDemoPageRoutingModule } from './component-demo-routing.module';

import { ComponentDemoPage } from './component-demo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentDemoPageRoutingModule
  ],
  declarations: [ComponentDemoPage]
})
export class ComponentDemoPageModule {}
