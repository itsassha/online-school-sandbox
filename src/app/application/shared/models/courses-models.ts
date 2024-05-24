export interface Course {
  course_id: number;
  course_name: string;
}

export interface CourseInfo extends Course {
  is_deleted: boolean;
}
