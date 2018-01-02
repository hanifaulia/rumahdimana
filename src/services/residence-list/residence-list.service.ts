import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { ResidenceItem } from '../../models/residence-item/residence-item.interface';

@Injectable()
export class ResidenceListService{

    private residenceListRef = this.db.list<ResidenceItem>('residence-list');
    
    constructor(private db: AngularFireDatabase){}

    getResidenceList(){
        return this.residenceListRef;
    }
    addItem(item: ResidenceItem){
        return this.residenceListRef.push(item);
    }
    editItem(item: ResidenceItem){
        return this.residenceListRef.update(item.key, item);
    }
    removeItem(item: ResidenceItem){
        return this.residenceListRef.remove(item.key);
    }
}