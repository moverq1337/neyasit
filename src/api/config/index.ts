import { Configuration } from 'src/api/gen/configuration'
import {CoursesApi} from 'src/api/gen'


export const apiConfig = new Configuration({
    basePath: `${import.meta.env.VITE_API_HOST}`,
})


export const coursesClient = new CoursesApi(apiConfig)

