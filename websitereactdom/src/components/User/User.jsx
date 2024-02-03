import {useParams} from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
    <div className='text-center bg-gray-900 text-white text-4xl font-serif'>User: {id}</div>
  )
}

export default User