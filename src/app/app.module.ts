import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Components:
import { HeaderComponent } from './components/header/header.component';

// Pages:
import { UnauthHomePageComponent } from './pages/unauth-home-page/unauth-home-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthHomePageComponent } from './pages/auth-home-page/auth-home-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MessagePersonalNewComponent } from './pages/message-personal-new/message-personal-new.component';
import { MessageGroupComponent } from './pages/message-group/message-group.component';
import { RecipientViewComponent } from './pages/recipient-view/recipient-view.component';

// Services:
import { BackendService } from './services/backend.service';
import { SessionsService } from './services/sessions.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AnonymousGuardService } from './services/anonymous-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnauthHomePageComponent,
    RegisterComponent,
    LoginComponent,
    AuthHomePageComponent,
    ProfileComponent,
    MessagePersonalNewComponent,
    MessageGroupComponent,
    RecipientViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UnauthHomePageComponent,
        canActivate: [AnonymousGuardService]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AnonymousGuardService]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AnonymousGuardService]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'messages/group/:id',
        component: MessageGroupComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'messages/personal/new',
        component: MessagePersonalNewComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'messages/personal/:id',
        component: RecipientViewComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'messages',
        component: AuthHomePageComponent,
        canActivate: [AuthGuardService]
      }
    ])
  ],
  providers: [
    BackendService,
    SessionsService,
    AuthService,
    AuthGuardService,
    AnonymousGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
