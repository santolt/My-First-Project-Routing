import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component: UserListComponent
  },
  {
    path:'user-edit',
    component: UserEditComponent
  },
  {
    path:'user-create',
    component: UserCreateComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
