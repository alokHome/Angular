import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { AuthComponent } from "./auth/auth/auth.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";




const appRoutes: Routes = [ 

  {path :'auth',component:AuthComponent},
    { path:'', component: AuthComponent },
    { path:'users',component: UsersComponent , children : [
      { path:':id/:name',component: UserComponent }
    ]},
    // { path :'servers',canActivate:[AuthGuard],  component: ServersComponent, children : [
      { path :'servers',canActivateChild:[AuthGuard],  component: ServersComponent, children : [
      { path :':id/:mode',component: EditServerComponent},
      { path :':id',component: ServerComponent}
    ] },
     { path: 'not-found', component:PageNotFoundComponent},
  
     { path: '**', redirectTo : '/not-found'}
    
  ];

  @NgModule({

    imports: [
             RouterModule.forRoot(appRoutes)
      ],

      exports:[RouterModule]
  })

  export class AppRoutingModule{
    
  }