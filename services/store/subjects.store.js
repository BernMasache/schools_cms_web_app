import cookie from 'js-cookie';
import useCrypto from "../cryptoJs";
import SubjectService from '../api/subjects.api';

const subjectService = new SubjectService()
const crypto = new useCrypto()
export default class SubjectStore {

    get = async () => {
        return await subjectService.get().then((result => {
            if (result) {
               
                // cookie.set('G-ASYVD', crypto.encrypt(JSON.stringify(result)), { expires: 2 / 24, sameSite: 'lax' });
              
                return result
            }
        })).catch(error => {
            throw error
        });
    }

    create = async (data) => {
        return await subjectService.create(data).then((result => {
            if (result) {
               
              
                return result
            }
        })).catch(error => {
            throw error
        });
    }

    update = async (data) => {
        return await subjectService.update(data).then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });
    }

    delete = async (id) => {
        return await subjectService.delete(id).then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });
    }
}
