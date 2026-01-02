import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/userinterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor(private http: HttpClient) {}

  getUserDataFromThisService() {
    return [
      {
        userName: 'jarvis',
        userEmail: 'jarvis@gmail.com',
      },
      {
        userName: 'tonny',
        userEmail: 'tonny@gmail.com',
      },
      {
        userName: 'ironman',
        userEmail: 'ironman@gmail.com',
      },
    ];
  }

  //REST DEMO
  getProductList() {
    let appUrl = 'https://dummyjson.com/products';

    return this.http.get(appUrl);
  }

  //User CRUD Operations

  //1.get all user

  userUrl = 'http://localhost:3000/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  //2. Save User
  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  //3. delete user
  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.userUrl + '/' + id);
  }

  //4. get user by Id
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id);
  }

  //5. update user
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl + '/' + user.id, user);
  }
}
