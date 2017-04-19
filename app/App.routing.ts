 import {ModuleWithProviders, Component} from '@angular/core';
 import {Routes, RouterModule} from '@angular/router';

import {AboutComponent} from './components/about.component';
import {UserComponent} from './components/user.component';

const appRoutes: Routes=[
          {
            path:'',
            component:UserComponent
          },
          {
            path:'about',
            component: AboutComponent
          }
      ];
export const  routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);

