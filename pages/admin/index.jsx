import React from "react";
import { withRouter } from "next/router";
import AdminLayout from "../../components/layouts/admin.layout";
import cookie from "js-cookie";
import Dashboard from "../../components/pages/admin/dashboard";
import FeesStructure from "../../components/pages/admin/feesStructure";
import StudentStore from "../../services/store/student.store";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import AcademicYearStore from "../../services/store/academicYear.store";
import Cookies from "js-cookie";

const studentStore = new StudentStore();
const academicYearsStore = new AcademicYearStore();
//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      studentsPresent: [],
      studentCount: [
        { id: 1, name: "Form 1", stat: 0, icon: UsersIcon },
        { id: 2, name: "Form 2", stat: 0, icon: EnvelopeOpenIcon },
        { id: 3, name: "Form 3", stat: 0, icon: CursorArrowRaysIcon },
        { id: 3, name: "Form 4", stat: 0, icon: CursorArrowRaysIcon },
      ],
      formOne: 0,
      formTwo: 0,
      formThree: 0,
      formFour: 0,

      breadcrumbPages: [
        {
          href: "/",
          name: "Home",
        },
      ],
    };
  }

  componentDidMount() {
    this.getAcademicYears();
    this.getCurrentAcademicYear();
    this.allPresentStudents();
    this.readCvs()
  }

  readCvs = () => {
    // let hh = csvToJson.getJsonFromCsv("/assets/csv/survey.csv");
    // console.log(hh);
  };
  getAcademicYears = () => {
    academicYearsStore.get().then((response) => {
      this.setState({
        academicYears: response,
      });
      Cookies.set("ACYL", JSON.stringify(response));
    });
  };

  getCurrentAcademicYear = () => {
    academicYearsStore
      .getCurrentAcademicYear()
      .then((data) => {
        if (data.length == 1) {
          return cookie.set("CAY", JSON.stringify(data));
        }
      })
      .catch((e) => {})
      .finally(() => {});
  };

  allPresentStudents = () => {
    studentStore
      .allPresentStudents()
      .then((data) => {
        // console.log(data);
        this.setState({
          studentsPresent: data,
        });
      })
      .catch((e) => {})
      .finally(() => {});
  };

  render() {
    return (
      <div>
        <Dashboard studentsPresent={this.state.studentsPresent} />
        {/* <FeesStructure /> */}
      </div>
    );
  }
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default PageWithRouter;
