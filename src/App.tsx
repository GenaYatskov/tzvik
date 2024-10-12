import { FC } from 'react'
import { UserTable } from './components/UserTable'
import { useGetUsersQuery } from './api/apiSlice'
import 'bootstrap/dist/css/bootstrap.min.css';


const App:FC = () => {
	const { data: users, error } = useGetUsersQuery()

	return (
		<div>
			{error && <p>Error: {error.toString()}</p>}
			{users ? <UserTable users={users} /> : <p>No data</p>}
		</div>
	)
}

export default App
