import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';


const routes: Routes = [
{ path: ' ', redirectTo: 'tutorials', pathMatch: 'full'},
{ path: 'tutorials', component : TutorialsListComponent},
{ path: 'tutorials/:id', component: TutorialDetailsComponent},
{ path: 'add', component: AddTutorialComponent}
];

@NgModule({
  declarations: [
		AppComponent,
		TutorialsListComponent,
		TutorialDetailsComponent,
		AddTutorialComponent
  ],
  imports: [
  	  BrowserModule,    
      RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes
    ),    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
