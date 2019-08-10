import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
  { path: "main", component: MainViewComponent },
  { path: "", redirectTo: "/main", pathMatch: "full" },
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
