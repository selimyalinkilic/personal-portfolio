import Link from 'next/link'

const BMC = () => {
  return (
    <Link href="https://buymeacoffee.com/selimyalinkilic">
      <a
        className="w-16 h-16 lg:w-24 lg:h-24 fixed right-6 bottom-6 bg-orange-300 overflow-hidden shadow rounded-full"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/selimyal/image/upload/v1641726628/bmc-logo-yellow_vrcuuk.png"
          className="w-full h-full"
        />
      </a>
    </Link>
  )
}

export default BMC
