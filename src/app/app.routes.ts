import { Route }  from '@angular/router';
import { AccountComponent } from './account/account.component';
import { RecordComponent } from './record/record.component';


export const appRouters: Route[]  = [
	 { path: '', redirectTo: '/account', pathMatch: 'full' },
	 { path: 'account', component: AccountComponent },
	 { path: 'record', component: RecordComponent }
]