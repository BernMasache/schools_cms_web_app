import DeleteTheSubject from "./delete";

export default function ViewSubjects(props) {
 
  return (
    <div className="p-4 bg-gray-50 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">All subjects</h1>
          <p className="mt-2 text-sm text-gray-700">
            There are{" "}
            <strong className="text-xl">
              ({props && typeof props?.subjects=="object"? props?.subjects?.length:""})
            </strong>{" "}
            added subjects
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="sr-only inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-2"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {props && typeof props?.subjects == "object"
                    ? props?.subjects?.map((subject, key) => (
                        <tr key={key}>
                          <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900 uppercase">
                            {subject?.code}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900 capitalize">
                            {subject?.name}
                          </td>
                          <td className="whitespace-nowrap px-2 py-2 text-sm text-end text-gray-900 capitalize">
                            <DeleteTheSubject
                              subjectId={subject?.uuid}
                              delete={props?.delete}
                            />
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
  );
}
