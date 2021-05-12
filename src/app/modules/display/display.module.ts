import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ComponentsComponent } from './components/components.component';
import { DisplayComponent } from './pages/display/display.component';
import { RouterModule } from '@angular/router';
import { DISPLAY_ROUTES } from './display.router';

@NgModule({
	declarations: [
		LayoutComponent,
		ComponentsComponent,
		DisplayComponent
	],
	imports: [
		CommonModule, 
		RouterModule.forChild(DISPLAY_ROUTES)
	]
})

export class DisplayModule { }
