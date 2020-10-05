export class Validator {
    static required(value, message) {
        if (!value || !value.toString().trim().length) {
            return { error: true, message };
        }
        return false;
    }
    static isMinimum(value, message) {
        if (value && value.length > 2) {
            return { error: true, message };
        } else {
            return { error: false, message: '' };
        }
    }
}

export const validateInput = (validators, value) => {
    if (validators && validators.length) {
        for (let i = 0; i < validators.length; i++) {
            const error = validators[i].check(value, validators[i].message);
            if (error) {
                return error;
            }
        }
    }
    return false;
};