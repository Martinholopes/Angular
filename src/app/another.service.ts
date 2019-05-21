import { Injectable} from '@angular/core';
import { Album } from './hero'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class album {

    private _url: string = "https://jsonplaceholder.typicode.com/albums";

    constructor( private http: HttpClient) { }

    getAlbum(): Observable<Album[]>{
       return this.http.get<Album[]>(this._url);
    }
}
