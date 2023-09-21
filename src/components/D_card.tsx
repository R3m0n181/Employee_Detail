import { CardProps } from "../utils/dataType"

const D_card = ({name, email, imgUrl, id}: CardProps) => {
 
  return (
    <div className="bg-cover bg-center h-80 w-64 rounded-lg shadow-lg" style={{ backgroundImage: `url(${imgUrl})` }}>
      <div className="bg-black bg-opacity-50 h-full w-full rounded-lg flex flex-col justify-end p-4">
        <div className="text-white font-bold text-xl mb-2">{name}</div>
        <div className="text-white text-opacity-80 text-sm">{email}</div>
      </div>
    </div>
  )
}

export default D_card