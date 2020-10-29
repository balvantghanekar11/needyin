import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { JobsComponent } from './components/jobs/jobs.component';

import { JobsService } from './services/jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'needyin'),
    AngularFirestoreModule
  ],
  providers: [JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
