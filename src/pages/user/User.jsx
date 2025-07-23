import { useContext } from 'react'
import { GlobalContext } from '../../contexts/ContextProviderApp'

export const User = () => {
  const {user} = useContext(GlobalContext);

  return (
    <div>
      <h2>Welcome {user.name}</h2>
    </div>
  )
}
