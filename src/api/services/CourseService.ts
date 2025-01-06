import { coursesClient } from 'src/api/config'
import { Course } from 'src/api/gen'

class CoursesService {

    public async getCourses() {
        await coursesClient.coursesGet()
    }

    public async createCourses(dto: Course) {
        await coursesClient.coursesPost(dto)
    }

    public async deleteCourse(courseId: string) {
        await coursesClient.coursesCourseIdDelete(courseId)
    }

    public async getCourseById(courseId: string) {
        await coursesClient.coursesCourseIdGet(courseId)
    }

    public async updateCourseById(courseId: string, dto: Course) {
        await coursesClient.coursesCourseIdPut(courseId, dto)
    }
}


export default new CoursesService()