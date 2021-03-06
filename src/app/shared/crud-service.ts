import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  constructor(protected http: HttpClient, protected API_URL) {}

  list() {
    return this.http.get(`${this.API_URL}`);
  }

  loadByID(id) {
    return this.http.get(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(record: T) {
    return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
  }

  save(record: T) {
    /*
    if (record['id']) {
      return this.update(record);
    }*/
    return this.create(record);
  }

  remove(id) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

}
