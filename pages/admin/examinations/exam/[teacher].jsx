import { useRouter } from "next/router";
import Router, { withRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Tab } from "@headlessui/react";
import AdminLayout from "../../../../components/layouts/admin.layout";
import useCrypto from "../../../../services/cryptoJs";
import UpdateTeacher from "../../../../components/pages/admin/teachers/update";
import { TeacherSchema } from "../../../../services/schema/teacherSchema";
import DeleteTeacher from "../../../../components/pages/admin/teachers/delete";
import TeacherStore from "../../../../services/store/teacher.store";
const crypto = new useCrypto();
const teacherStore = new TeacherStore()
function TeacherComponent() {
  const router = useRouter();

  const updateTeacher=(data)=>{
    teacherStore.update(data).then(res=>{
      console.log(res);

    }).catch(error=>{
      console.log(res);

    }).finally(()=>{

    })
  }

  const deleteTeacher=(id)=>{
 teacherStore.update(id).then(res=>{
  console.log(res);
    }).catch(error=>{
      console.log(error);

    }).finally(()=>{
      
    })
  }
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="">
          <UpdateTeacher teacher={router.query && router.query} update={updateTeacher}/>
        </div>
          <div className="">
            <DeleteTeacher teacherId={router.query && router.query.data == undefined
                ? ""
                : crypto.decrypt(router.query.data).uuid} delete={deleteTeacher}/>
          </div>
        
      </div>
    </div>
  );
}

const PageWithRouter = withRouter(TeacherComponent);
PageWithRouter.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default PageWithRouter;
