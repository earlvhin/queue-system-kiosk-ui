import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DisplayComponent } from "./pages/display/display.component";

export const DISPLAY_ROUTES: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
            {
                path: '',
                component: DisplayComponent
            }
        ]
	}
];