import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_BASE_URL, FileParameter } from '../web-api-client';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(@Inject(HttpClient) private http: HttpClient, @Optional() @Inject(API_BASE_URL) private baseUrl?: string) {

  }

  saveWidget(file: File | null | undefined, data: any){
    let url_ = this.baseUrl || '' + "/api/Document";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (file !== null && file !== undefined)
            content_.append("file", file, file.name ? file.name : "file");

        if(data){
          for (let index = 0; index < data.length; index++) {
            let widgetData = JSON.stringify(data[index]);
            content_.append('widget'+index, widgetData );            
          }
        }
        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/octet-stream"
            })
        };
    return this.http.request('post', url_, options_).pipe(map(data => { return data; }));

  }
}
