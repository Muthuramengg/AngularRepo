import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './Post/post-create/post-create.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { appRoutes } from './routes';
import { UserService } from './Service/User/user.service';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    SignupComponent,
    UserComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
   ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
