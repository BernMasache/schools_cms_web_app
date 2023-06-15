import DeleteAcademicYear from "./delete";

export default function AllAcademicYears(props) {
  const deleteAcademicYear = (id) => {
    
    props.deleteAcademicYear(id);
  };
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="-mt-1 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Academic year
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Term
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {props && typeof props?.academicYears == "object"
                      ? props?.academicYears?.map((academicYears, key) => (
                          <tr key={key}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {academicYears?.academicYear}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {academicYears?.term}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {/* <span
                                id={academicYears.uuid}
                                onClick={deleteAcademicYear}
                                className="p-2 rounded text-white cursor-pointer bg-red-500"
                              >
                                Delete
                              </span> */}
                              <DeleteAcademicYear academicYearId={academicYears.uuid} delete={deleteAcademicYear}/>
                            </td>
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
