import { FC } from 'react'
import { UserTable } from './components/UserTable'
import { useGetUsersQuery } from './api/apiSlice'
import 'bootstrap/dist/css/bootstrap.min.css';


const App:FC = () => {
	const { data: users, error } = useGetUsersQuery()

	return (
			<div>
				{error && <p>Ошибка: {error.toString()}</p>}
				{users ? <UserTable users={users} /> : <p>Нет данных</p>}
			</div>
	)
}

export default App
