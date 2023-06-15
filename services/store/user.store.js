import UserService from "../api/user.api";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const userService = new UserService();
const crypto = new useCrypto();
export default class UserStore {
  signin = async (data) => {
    return await userService
      .signin(data)
      .then((result) => {
       return result
      })
      .catch((error) => {
        throw error;
      });
  };
  updatePassword = async (data) => {
   
    return await userService
      .updatePassword(data)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };
}
