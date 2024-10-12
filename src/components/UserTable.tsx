import { FC } from 'react'
import { IUser } from '../types/IUser'

export const UserTable: FC<{ users: IUser[] }> = ({ users }) => {
    const displayUserHandler = (user:IUser) => {
        console.log(user)
    }

	return (
		<table className='table table-striped table-hover'>
			<thead className='table-dark'>
				<tr>
					<th scope='col'>Name</th>
					<th scope='col'>Mail</th>
					<th scope='col'>Phone</th>
					<th scope='col'>Address</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => (
					<tr onClick={() => displayUserHandler(user)} key={user.id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
						<td>
							<p>{'City: ' + user.address.city}</p>
							<p>{'Street: ' + user.address.street}</p>
							<p>{'Suite: ' + user.address.suite}</p>
							<p>{'Mail index: ' + user.address.zipcode}</p>
							<p>
								{'Geo: ' + user.address.geo.lat + ', ' + user.address.geo.lng}
							</p>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
