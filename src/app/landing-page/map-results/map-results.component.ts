import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from '@angular/fire/database';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as firebase from 'firebase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-results',
  templateUrl: './map-results.component.html',
  styleUrls: ['./map-results.component.scss']
})
export class MapResultsComponent implements OnInit {
  private db: AngularFireDatabase;
  private list: any[] = [];
  private region: string;
  // items: Observable<any[]>;
   itemsRef: AngularFireList<any[]>;
  // items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  // size$: BehaviorSubject<string | null>;
  public size$ = new Subject<string>();
  constructor(db: AngularFireDatabase, private route: ActivatedRoute) {
    this.db = db;
    // this.size$ = new Subject<string>();
    const queryObservable = this.size$.pipe(
      switchMap(comunidad =>
        // db.list('/playas-espana', ref => ref.limitToFirst(10)).valueChanges()
        db.list('/playas', ref => ref.orderByChild('comunidad_autonoma').equalTo(comunidad)).valueChanges()
      )
    );
    // subscribe to changes
    queryObservable.subscribe(queriedItems => {
      console.log('queriedItems:', queriedItems);
    });

    this.route.params.subscribe(params => {
      if (params['region']) {
        this.region = params['region'];
        console.log(this.region);
        this.filterBy(this.region);
      }
    })



    // this.size$ = new BehaviorSubject(null);
    // this.items$ = this.size$.pipe(
    //   switchMap(comunidad =>
    //     db.list('/playas-espana', ref =>
    //       comunidad ? ref.orderByChild('comunidad_autonoma').equalTo(comunidad) : ref
    //     ).snapshotChanges()
    //   )
    // );
    // db.list('/playas-espana').valueChanges().subscribe(items => {
    //   console.log('result', items);
    // });

    // db.database.ref('/playas-espana/playas').once('value', (snapshot) => {
    //   console.log(snapshot.val());
    //   var items = snapshot.val();
    //   if (items != null) {
    //     Object.keys(items).forEach(element => {
    //       let item = items[element];
    //       this.list.push(item);
    //     });
    //   }
    // });
    // db.list('/playas-espana').valueChanges().subscribe(items => {
    //   if (items) {
    //     let keys = Object.keys(items);
    //     keys.forEach(element => {
    //       let obj = items[element];
    //       this.list.push(obj);
    //     })
    //      // Use it anywhere
    //   }
    // });
    // this.items = db.list('/playas-espana', ref => ref.orderByChild('comunidad_autonoma').equalTo('Galicia').limitToFirst(10))
    // this.itemsRef = db.list('/playas-espana', ref => ref.limitToFirst(3));
    // this.items = this.itemsRef.valueChanges();

    // console.log(this.items);
  }

  filterBy(comunidad: string | null) {
    this.size$.next(comunidad);
  }
  ngOnInit() {
    // this.size$.next('Galicia');
    // this.filterBy('Galicia');
    // const db = firebase.database();
    // const ref = db.ref('playas-espana');
    // ref.on('value', (snapshot) => {
    //   snapshot.forEach((childSnapshot) => {
    //     console.log(childSnapshot)
    //     var childData = childSnapshot.val();
    //     console.log('childdata:', childData);
    //     // const comunidad = childData.comunidad_autonoma;
    //     // console.log(comunidad);
    //   });
    // });
   // const region = this.route.snapshot.params['region'];

    }

  onRequest() {
     this.db.list('/playas').valueChanges().subscribe(items => {
      console.log('result', items);
    });
  }

}
