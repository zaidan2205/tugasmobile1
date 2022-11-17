import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  //link API
  apiURL() {
    return "http://localhost/tugasmobile1-api";
  }

  getBarang() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  deleteBarang(id) {
    return this.http.delete(this.apiURL() + '/hapus.php?id=' + id);
  }

  ambilBarang(id) {
    return this.http.get(this.apiURL() + '/lihat.php?id=' + id);
  }


}