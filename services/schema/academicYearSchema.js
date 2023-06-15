import * as yup from 'yup';

export default createAcademicYearSchema = yup.object().shape({
    academicYear: yup.string().required(),
    term: yup.string().required(),
    //   age: yup.number().required().positive().integer(),
    //   email: yup.string().email(),
    //   website: yup.string().url(),
    //   createdOn: yup.date().default(function () {
    //     return new Date();
    //   }),
});

