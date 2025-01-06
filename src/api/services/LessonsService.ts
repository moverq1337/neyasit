import { lessonsClient } from 'src/api/config'
import { Lesson } from 'src/api/gen'

class LessonsService {

    public async getLessonByModuleId(moduleId: string) {
        await lessonsClient.modulesModuleIdLessonsGet(moduleId)
    }

    public async createLessonByModuleId(moduleId: string, dto: Lesson) {
        await lessonsClient.modulesModuleIdLessonsPost(moduleId, dto)
    }

    public async deleteLessonByModuleAndLessonId(moduleId:string, lessonId: string) {
        await lessonsClient.modulesModuleIdLessonsLessonIdDelete(moduleId, lessonId)
    }

}


export default new LessonsService()