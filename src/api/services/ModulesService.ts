import { modulesClient } from 'src/api/config'
import { Module } from 'src/api/gen'

class ModulesService {

    public async getModulesByCourseId(courseId: string) {
        await modulesClient.coursesCourseIdModulesGet(courseId)
    }

    public async createCourses(courseId: string, dto: Module) {
        await modulesClient.coursesCourseIdModulesPost(courseId, dto)
    }

    public async deleteModuleById(courseId: string, moduleId: string) {
        await modulesClient.coursesCourseIdModulesModuleIdDelete(courseId, moduleId)
    }
}


export default new ModulesService()