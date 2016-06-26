System.register(['angular2/core', './course.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = "The title of courses page";
                    this.courses = [];
                    this.subject = {
                        title: "Angular JS 2",
                        rating: 4.9745,
                        students: 4857,
                        price: 99.95,
                        releaseDate: new Date(2016, 3, 1)
                    };
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "<h2>Courses</h2>\n              {{ title }}\n              <div *ngIf=\"courses.length > 0\">\n              <input type=\"text\" autoGrow [value]=\"title\"/>\n              <ul>\n                <li *ngFor=\"#course of courses\">\n                    {{ course }}\n                </li>\n              </ul>\n              </div>\n              <div *ngIf=\"courses.length == 0\">\n                No courses!\n              </div>\n              <h2>Subjects</h2>\n              <div>{{ subject.title | uppercase }}</div>\n              <div>{{ subject.rating | number:'1.2-2' }}</div>\n              <div>{{ subject.students | number }}</div>\n              <div>{{ subject.price | currency:'USD':true }}</div>\n              <div>{{ subject.releaseDate | date:'MMM yyyy' }}</div>\n              {{ subject | json }}\n              ",
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map