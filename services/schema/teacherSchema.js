import * as yup from 'yup';

export function TeacherSchema() {
    return (() => yup.object().shape({
        name: yup
            .string()
            .matches(/^[A-Za-z ]+$/, "invalid format")
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
    }))
}

export function RemoveTeacherSchema() {
    return (() => yup.object().shape({
        code: yup.string().required(),
        confirmCode: yup
            .string()
            .required("confirmation code is required")
            .oneOf([yup.ref("code")], "confirmation code mismatch"),
    }))
}
export function RemoveTeacherSubjectSchema() {
    return (() => yup.object().shape({
        code: yup.string().required(),
        confirmCode: yup
            .string()
            .required()
            .oneOf([yup.ref("code")], "confirmation code mismatch"),
    }))
}

export function TeacherSubjectAssignSchema() {
    return (() => yup.object().shape({
        subjectId: yup
            .string()
            .required("subject is required"),
        teacherId: yup
            .string()
            .required("Teacher is required"),
        term: yup.string().required("number is required"),
        form: yup.string().required("form is required"),
        academicYear: yup.string().required("academic year is required"),


    }))
}