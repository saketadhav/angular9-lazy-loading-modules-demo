import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { organizationRoutes } from './organization.routes';
import { DetailsComponent } from './detailscomponent';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(organizationRoutes)
  ],
  declarations: [
    DetailsComponent
  ],
  providers: []
})
export class OrganizationModule { }