import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';

import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  jobs:Observable<Job[]>;

  jobsCollection: AngularFirestoreCollection<Job>;

  constructor(public data:AngularFirestore) {
    this.jobs =this.data.collection('Jobs').valueChanges();

   }

   get_jobs(){
      return this.jobs;
   }
}
