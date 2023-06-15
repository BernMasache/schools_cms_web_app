const transactions = [
  {
    id: 'AAPS0L',
    company: '2022-2023',
    share: '260000.00',
    commission: '260000.00',
    price: '260000.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
  {
    id: 'AAPS0',
    company: '2021-2022',
    share: '260000.00',
    commission: '260000.00',
    price: '260000.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
  {
    id: 'AAS0L',
    company: '2020-2021',
    share: '260000.00',
    commission: '260000.00',
    price: '260000.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  },
  {
    id: 'AAPSL',
    company: '2019-2020',
    share: '260000.00',
    commission: '260000.00',
    price: '260000.00',
    quantity: '12.00',
    netAmount: '$4,397.00',
  }
  // More transactions...
]

export default function FeesStructure() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Fees Sturucture</h1>
          <p className="mt-2 text-sm text-gray-700">
            Fees structure for a term in an academic year
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
                      className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Academic Year
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Term 1
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Term 2
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Term 3
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Net amount
                    </th>
                    <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                        {transaction.company}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.share}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.commission}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.price}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.quantity}</td>
                      <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.netAmount}</td>
                      <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {transaction.id}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
