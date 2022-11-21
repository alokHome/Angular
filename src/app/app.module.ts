import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponentComponent } from './server-component/server-component.component';
import { MydirectivesComponent } from './mydirectives/mydirectives.component';
import { BasicHighlightDirective } from './custdirec/basichighlight';
import { BetterDirectiveDirective } from './better-directive.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingServie } from './logging-service';
import { AccountService } from './account-services';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing-module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { FormFirstComponent } from './form-first/form-first.component';
import { PipesStartComponent } from './pipes-start/pipes-start.component';
import  { ShortenPipe } from './Shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { HttpStartComponent } from './http-start/http-start.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/authInte.services';
import { AuthComponent } from './auth/auth/auth.component';



@NgModule({
  declarations: [
    ShortenPipe,
    AppComponent,
    CockpitComponent,
    ServerComponentComponent,
    MydirectivesComponent,
    BasicHighlightDirective,
    BetterDirectiveDirective,
    AccountComponent,
    NewAccountComponent,
    ServersComponent,
    HomeComponent,
    UsersComponent,
    ServerComponent,
    EditServerComponent,
    UserComponent,
    PageNotFoundComponent,
    FormFirstComponent,
    PipesStartComponent,
    FilterPipe,
    HttpStartComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggingServie,AccountService,ServersService,AuthGuard,AuthService,
  {
    provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
