const CryptoJS = require("crypto-js");

export default class useCrypto {
    constructor() {
        this.key = 'hahahaha-so-fanny!-the-secrete-is-kept-open';
    }
    
    encrypt(data) {
        return CryptoJS.AES.encrypt(JSON.stringify(data), this.key).toString();
    }
    decrypt(data) {
        if (data == null) {
            return null;
        }
        else {
            var bytes = CryptoJS.AES.decrypt(data, this.key);
            return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        }

    }
}