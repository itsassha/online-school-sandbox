import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CourseInfo } from '../models/courses-models';

@Injectable({
  providedIn: 'root',
})
export class DictionariesService {
  coursesMap$: Observable<Map<number, string>>;

  constructor(private restHttp: RestHttpClient) {}

  /** Получение всех курсов онлайн-школы*/
  getAllCourses(): Observable<CourseInfo[]> {
    return this.restHttp.get<CourseInfo[]>('/src/assets/mocks/courses.json');
  }

  /** Получение доступных курсов онлайн-школы */
  getEnableCourses(): Observable<CourseInfo[]> {
    return this.restHttp
      .get<CourseInfo[]>('/src/assets/mocks/courses.json')
      .pipe(map((course) => course.filter((item) => !item.is_deleted)));
  }
}
