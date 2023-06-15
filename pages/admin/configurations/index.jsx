import React, { Fragment, useState } from "react";
import Router, { withRouter } from "next/router";
import AdminLayout from "../../../components/layouts/admin.layout";
import cookie from "js-cookie";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AcademicYearStore from "../../../services/store/academicYear.store";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import AllAcademicYears from "../../../components/pages/admin/configurations/academicYears/read.academicYear";
import CreateAcademicYear from "../../../components/pages/admin/configurations/academicYears/create.academicYear";
import UpdateAcademicYear from "../../../components/pages/admin/configurations/academicYears/update.academicYear";
import PageHeading from "../../../components/layouts/page.heading";
import useCrypto from "../../../services/cryptoJs";
import Cookies from "js-cookie";
import SetCurrentAcademicYear from "../../../components/pages/admin/configurations/academicYears/setCurrentAcademicYear";

const academicYearStore = new AcademicYearStore();

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      academicYears: [],
      currentAcademicYear: [],
      breadcrumbPages: [
        {
          href: "/",
          name: "Home",
        },
      ],
      teachers: [],
      tabs: [
        { name: "academic years" },
        { name: "Current academic year" },
        { name: "fees management" },
      ],
    };
  }

  componentDidMount() {
    this.getAcademicYears();
    this.getCurrentAcademicYear();
  }

  getAcademicYears = () => {
    academicYearStore.get().then((response) => {
      this.setState({
        academicYears: response,
      });
      Cookies.set("ACYL", JSON.stringify(response));
    });
  };

  createAcademicYear = (data) => {
    if (data.academicYear == "") {
    } else if (data.term == null || data.term == 0 || data.term == "") {
      toast.error("Fill all fields", {
        position: "top-right",
        transition: Flip,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (data.academicYear.split("-").length == 2) {
        data.term = parseInt(data.term);
        academicYearStore
          .create(data)
          .then((response) => {
            if (response?.data.error == false) {
              toast.success(response?.data?.message, {
                position: "top-right",
                transition: Flip,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            } else {
              toast.error(response?.data?.message, {
                position: "top-right",
                transition: Flip,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          })
          .catch((e) => {
            toast.success(e.message, {
              position: "top-right",
              transition: Flip,
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          .finally(() => {
            this.getAcademicYears();
          });
      } else {
        toast.success("Invalid input values", {
          position: "top-right",
          transition: Flip,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  updateAcademicYear = (data) => {
    if (
      data.academicYear == null ||
      data.academicYear == undefined ||
      data.academicYear == ""
    ) {
      toast.error("Academic year not selected", {
        position: "top-right",
        transition: Flip,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      data.newTerm == null ||
      data.newTerm == 0 ||
      data.newTerm == ""
    ) {
      toast.error("Term not selected", {
        position: "top-right",
        transition: Flip,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      if (data.newAcademicYear == "") {
        toast.error("Modification field not set ", {
          position: "top-right",
          transition: Flip,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        // console.log(data);
        if (data.newAcademicYear.split("-").length == 2) {
          // data.term = parseInt(data.academicYear.split("term")[1]);
          data.newTerm = parseInt(data.newTerm);
          // console.log(data);
          academicYearStore
            .update(data)
            .then((response) => {
              if (response?.status == 200 && response?.data?.error == false) {
                toast.success(response?.data?.message, {
                  position: "top-right",
                  transition: Flip,
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else {
                toast.warning(response?.data?.message, {
                  position: "top-right",
                  transition: Flip,
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            })
            .catch((e) => {
              toast.error(e.message, {
                position: "top-right",
                transition: Flip,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            })
            .finally(() => {
              this.getAcademicYears();
            });
        } else {
          toast.error("Error occurred, invalid details", {
            position: "top-right",
            transition: Flip,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    }
  };

  setCurrentAcademicYear = (id) => {
    if (id == "" || id == null || id == undefined) {
      toast.error("Oops! Select an academic year.", {
        position: "top-right",
        transition: Flip,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      academicYearStore
        .setCurrentAcademicYear(id)
        .then((resp) => {
          toast.success(resp?.data?.message, {
            position: "top-right",
            transition: Flip,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((e) => {
          toast.error(e.message, {
            position: "top-right",
            transition: Flip,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .finally(() => {
          this.getCurrentAcademicYear();
        });
    }
  };
  getCurrentAcademicYear = () => {
    academicYearStore
      .getCurrentAcademicYear()
      .then((data) => {
        if (data.length == 1) {
          return cookie.set("CAY", JSON.stringify(data));
        }
      })
      .catch((e) => {})
      .finally(() => {});
  };

  deleteAcademicYear = (id) => {
    if (id == null || id == "" || id == undefined) {
      toast.error("Error occurred", {
        position: "top-right",
        transition: Flip,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      academicYearStore
        .delete(id)
        .then((resp) => {
          if (resp.data.error == true) {
            toast.error(resp?.data?.message, {
              position: "top-right",
              transition: Flip,
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          } else {
            toast.success(resp?.data?.message, {
              position: "top-right",
              transition: Flip,
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        .catch((e) => {
          toast.error(e.message, {
            position: "top-right",
            transition: Flip,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .finally(() => {
          this.getAcademicYears();
        });
    }
  };
  render() {
    return (
      // <div className="px-4 mt-8 sm:px-6 lg:px-8">
      <div className="">
        <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
          <div>
            {/* <BreadcrumbWidget breadcrumbs={this.state.breadcrumbPages} /> */}
          </div>
          <div className="py-2">
            <PageHeading title={"Configurations"} />
          </div>
          <div className="align-middle inline-block min-w-full min-h-full mt-2">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 p-2">
                      <AllAcademicYears
                        deleteAcademicYear={this.deleteAcademicYear}
                        academicYears={this.state?.academicYears}
                      />

                      <CreateAcademicYear
                        createAcademicYear={this.createAcademicYear}
                      />

                      <UpdateAcademicYear
                        academicYears={this.state?.academicYears}
                        update={this.updateAcademicYear}
                      />
                    </div>
                  </Tab.Panel>

                  <Tab.Panel>
                    <div className="space-y-4 md:space-y-4 lg:space-y-4 p-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-4 ">
                        <SetCurrentAcademicYear
                          academicYears={this.state?.academicYears}
                          setCurrentAcademicYear={this.setCurrentAcademicYear}
                        />
                        <div className="">
                          {cookie.get("CAY") == undefined ||
                          cookie.get("CAY") == null ? (
                            ""
                          ) : (
                            <span className="p-1 bg-gray-400 rounded-md text-white text-base capitalize">
                              current academic year :{" "}
                              {JSON.parse(cookie.get("CAY"))[0]?.academicYear} -
                              Term -{" "}
                              {
                                JSON.parse(cookie.get("CAY"))[0]?.AcademicYear
                                  .term
                              }
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="space-y-4 md:space-y-4 lg:space-y-4 p-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-x-4 "></div>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
        <ToastContainer transition={Flip} />
      </div>
    );
  }
}

const PageWithRouter = withRouter(Page);
PageWithRouter.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default PageWithRouter;
