const Pill = ({ title }: { title: string }) => {
  return (
    <span className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-sm mr-2">
      {title}
    </span>
  )
}

export default Pill;
