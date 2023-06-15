import React from "react";
import Router, { withRouter } from "next/router";
import { Tab } from "@headlessui/react";

import AdminLayout from "../../../components/layouts/admin.layout";

import cookie from "js-cookie";
import TeacherStore from "../../../services/store/teacher.store";
import SubjectStore from "../../../services/store/subjects.store";
import AcademicYearStore from "../../../services/store/academicYear.store";
import useCrypto from "../../../services/cryptoJs";
import UpdatePassword from "../../../components/layouts/settings/security/updatePassword";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// instances
const teacherStore = new TeacherStore();
const subjectStore = new SubjectStore();
const crypto = new useCrypto();
const academicYearStore = new AcademicYearStore();

//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      teachers: [],
      subjects: [],
      academicYears: [],
      teachersSubjects: [],
      teacherSubjects: [],
      breadcrumbPages: [
        {
          href: "/",
          name: "Home",
        },
      ],
      tabs: [{ name: "General" }, { name: "Security" }],
    };
  }

  componentDidMount() {
    this.getUser();
  }
  getUser = () => {
    let user = JSON.parse(crypto.decrypt(cookie.get("G-AUDS")));

    if (typeof user == "object") {
      return user;
    } else {
      Router.push("/signin");
    }
  };

  render() {
    return (
      <>
        <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
          <div>
            {/* <BreadcrumbWidget breadcrumbs={this.state.breadcrumbPages} /> */}
          </div>
          <div className=" py-2  md:flex md:items-center md:justify-between">
            <div className="px-4 sm:px-6 md:px-0">
              <h1 className="text-2xl font-extrabold text-gray-900 capitalize">
                Administrator
              </h1>
            </div>
            <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4"></div>
          </div>
          <div className="align-middle inline-block min-w-full min-h-full mt-5">
            <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white sm:p-5">
              <Tab.Group>
                <div className="border-b border-gray-200 bg-white">
                  <Tab.List>
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {this.state.tabs.map((tab) => (
                        <Tab
                          key={tab.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-primary-500 text-primary-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "group inline-flex items-center py-4 px-1 border-b-2 focus:outline-none"
                            )
                          }
                        >
                          <span className="capitalize  font-medium text-sm">
                            {tab.name}
                          </span>
                        </Tab>
                      ))}
                    </nav>
                  </Tab.List>
                </div>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-4 p-2"></div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-4 p-2">
                      <div className="">
                        <div className="p-2 mt-8 mb-4">
                          Warning. This operation cannot be undone.
                        </div>
                        <UpdatePassword getUser={this.getUser} />
                      </div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default PageWithRouter;
