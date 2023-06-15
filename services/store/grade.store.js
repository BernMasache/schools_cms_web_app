import cookie from 'js-cookie';
import useCrypto from "../cryptoJs";
import GradeService from '../api/grade.api';

const gradeService = new GradeService()
const crypto = new useCrypto()
export default class GradeStore {

    get = async () => {
        return await gradeService.get().then((result => {
            if (result) {
               
                // cookie.set('G-ASYVD', crypto.encrypt(JSON.stringify(result)), { expires: 2 / 24, sameSite: 'lax' });
              
                return result
            }
        })).catch(error => {
            throw error
        });
    }

    create = async (data) => {
        return await gradeService.create(data).then((result => {
            if (result) {
               
              
                return result
            }
        })).catch(error => {
            throw error
        });
    }

    update = async (data) => {
        return await gradeService.update(data).then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });
    }

    delete = async (id) => {
        return await gradeService.delete(id).then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });
    }

    getGradesPerAcademicYearForStatistics = async (data) => {
        return await gradeService.getGradesPerAcademicYearForStatistics(data).then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });
    }
}
