import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_BASE_URL, FileParameter, SwaggerException } from '../web-api-client';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(@Inject(HttpClient) private http: HttpClient, @Optional() @Inject(API_BASE_URL) private baseUrl?: string) {

  }

  saveWidget(file: File | null | undefined, data: any, templateId: number, fileParameterId: number){
    let url_ = this.baseUrl || '' + "/api/Document";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (file !== null && file !== undefined){
            content_.append("file", file, file.name ? file.name : "file");
            content_.append('fileParameterId', fileParameterId.toString());
        }

        if(data){
          for (let index = 0; index < data.length; index++) {
            let widgetData = JSON.stringify(data[index]);
            content_.append('widget'+index, widgetData );            
          }
        }

        content_.append("templateId", templateId.toString());
        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/octet-stream"
            })
        };

    //return this.http.request('post', url_, options_).pipe(map(data => { return data; }));
    return this.http.request('post', url_, options_).pipe(_observableMergeMap((response_ : any) => {
      return this.processCreateDocument(response_);
    }))
  }

  processCreateDocument(response: HttpResponseBase): Observable<number> {
    let jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;
    const status = response.status;
    const responseBlob =
        response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
    if (status === 200) {
        return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, jsonParseReviver);
        result200 = resultData200 !== undefined ? resultData200 : <any>null;
        return _observableOf(result200);
        }));
    } else if (status !== 200 && status !== 204) {
        return this.blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return this.throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }));
    }
    return _observableOf<number>(<any>null);
  }

  blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
  }

  throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
      if (result !== null && result !== undefined)
          return _observableThrow(result);
      else
          return _observableThrow(new SwaggerException(message, status, response, headers, null));
  }
}