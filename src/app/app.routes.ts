import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { BlogAddComponent } from "./pages/blog/blog-add.component";
import { LoginComponent } from "./pages/login/login.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { AuthGuard } from "./services/guards/auth.guard"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "blog", component: BlogComponent},
  {path: "blog/add", component: BlogAddComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
]

export const router = RouterModule.forRoot(APP_ROUTES)
