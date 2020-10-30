import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActionModel } from '../model/action.model';

@Injectable({ providedIn: 'root' })
export class ActionService {
  private subject = new Subject<ActionModel>();

  sendActionMessage(_action: ActionModel) {
    this.subject.next(_action);
  }

  clearActionMessages() {
    this.subject.next();
  }

  getActionMessage(): Observable<ActionModel> {
    return this.subject.asObservable();
  }
}
