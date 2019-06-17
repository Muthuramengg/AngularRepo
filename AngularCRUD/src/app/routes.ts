import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { PostCreateComponent } from './Post/post-create/post-create.component';
import { SigninComponent } from './signin/signin.component';
import { User } from './Model/user.model';

export const appRoutes: Routes = [
  {
    path: 'signup',
    component: UserComponent,
    children: [
      { path: '', component: SignupComponent}
    ]},
    {
      path: 'signin',
      component: UserComponent,
      children: [
        { path: '', component: SigninComponent}
      ]},
  {
    path: 'postcreate',
    component: PostCreateComponent
  }
];
