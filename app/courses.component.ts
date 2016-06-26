import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
              {{ title }}
              <div *ngIf="courses.length > 0">
              <input type="text" autoGrow [value]="title"/>
              <ul>
                <li *ngFor="#course of courses">
                    {{ course }}
                </li>
              </ul>
              </div>
              <div *ngIf="courses.length == 0">
                No courses!
              </div>
              <h2>Subjects</h2>
              <div>{{ subject.title | uppercase }}</div>
              <div>{{ subject.rating | number:'1.2-2' }}</div>
              <div>{{ subject.students | number }}</div>
              <div>{{ subject.price | currency:'USD':true }}</div>
              <div>{{ subject.releaseDate | date:'MMM yyyy' }}</div>
              {{ subject | json }}
              `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title = "The title of courses page";
    courses = [];
    subject = {
        title: "Angular JS 2",
        rating: 4.9745,
        students: 4857,
        price: 99.95,
        releaseDate: new Date(2016, 3, 1)
    }
    
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
} 