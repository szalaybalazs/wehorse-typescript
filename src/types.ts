export interface iCourse {
  courseId: number
  courseName: string
  isNew: boolean
  wishListFlag: boolean
}

export interface iState {
  courseList: iCourse[]
  wishlistFilter: boolean
}