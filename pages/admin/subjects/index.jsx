import React, { Fragment, useState } from "react";
import {
  ToastContainer,
  toast,
  Slide,
  Zoom,
  Flip,
  Bounce,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router, { withRouter } from "next/router";
import AdminLayout from "../../../components/layouts/admin.layout";
import SubjectStore from "../../../services/store/subjects.store";

import PageHeading from "../../../components/layouts/page.heading";
import SubjectsComponent from "../../../components/pages/admin/subjects/subjects";

const subjectStore = new SubjectStore();

const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
//PAGE
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      subjects: [],
      breadcrumbPages: [
        {
          href: "/",
          name: "Home",
        },
      ],
      navigation: [
        {
          name: "academic years",
        },
        { name: "examination release" },
        { name: "fees" },
      ],
    };
  }

  componentDidMount() {
    this.getSubjects();
  }

  getSubjects = () => {
    subjectStore.get().then((response) => {
      this.setState({
        subjects: response.subjects,
      });
    });
  };

  create = (data) => {
    subjectStore.create(data).then((resp) => {
        if (resp.data.error==false) {
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
        }else{
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
    }).catch(e=>{
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
    }).finally(()=>{
        this.getSubjects();
    })
  };

  update = (data) => {
    subjectStore.update(data).then(resp=>{
      if (resp.data.error==false) {
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
      }else{
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
      }
      }).catch(error=>{
        toast.error(error.message, {
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
      }).finally(()=>{
      this.getSubjects();
      })
  };

  delete = (id) => {
    
    subjectStore.delete(id).then(resp=>{
      console.log(resp);
      if (resp.data.error==false) {
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
      }else{
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
      }
      }).catch(error=>{
        toast.error(error.message, {
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
      }).finally(()=>{
      this.getSubjects();
      })
  };
  render() {
    return (
      <>
        <div className="px-4 mt-8 sm:px-6 lg:px-8">
          <PageHeading title={"Subjects"} />
          <SubjectsComponent
            subjects={this.state.subjects}
            create={this.create}
            update={this.update}
            delete={this.delete}
          />
          <ToastContainer transition={Flip} />
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
