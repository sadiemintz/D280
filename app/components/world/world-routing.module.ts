import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';

import { WorldComponent } from "./world.component";

const routes: Routes = [
    {path: 'world', component: WorldComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorldRoutingModule { }