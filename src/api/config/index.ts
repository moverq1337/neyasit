import { Configuration } from 'src/api/gen/configuration'
import {CoursesApi, ModulesApi} from 'src/api/gen'


export const apiConfig = new Configuration({
    basePath: `${import.meta.env.VITE_API_HOST}`,
})


export const coursesClient = new CoursesApi(apiConfig)
export const modulesClient = new ModulesApi(apiConfig)
