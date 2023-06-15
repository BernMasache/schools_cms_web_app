import * as yup from 'yup';

export function StudentSchema() {
    return (() => yup.object().shape({
        name: yup
            .string()
            .matches(/^[A-Za-z ]+$/, "invalid format")
            .required(),
        code: yup
            .string()
            .required(),
        dob: yup
            .date()
            .required(),
        phone: yup
            .string()
            .matches(
                /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                {
                    message: "invalid format",
                    excludeEmptyString: false,
                }
            )
            .required(),
        sex: yup.string().required(),
        form: yup.string().required(),
        year: yup.string().required(),


    }))
}