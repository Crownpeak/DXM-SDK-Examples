import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routing} from "./routing";

@NgModule({
    imports: [RouterModule.forRoot(Routing.routes,{useHash:true})],
    exports: [RouterModule]
})

export class CoreRoutingModule {}
