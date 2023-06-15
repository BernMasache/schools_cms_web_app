export default function PageHeading(props) {
    return (
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-lg font-medium leading-6 text-gray-900 p-4 bg-gray-50 capitalize">{props.title} page</h3>
      </div>
    )
  }
  