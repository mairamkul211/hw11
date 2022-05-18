import Card from '../UI/Card'
import Delet from './Delet'
import styles from './UserList.module.css'

const UserList = (props) => {
	function delet(e) {
		props.onFilter(
			props.users.filter((el) => {
				if (el.id !== e.target.id) {
					return [el]
				}
			}),
		)
	}
	return (
		<Card className={styles.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						{user.name} {user.age} years old
						<Delet id={user.id} onDel={delet} />
					</li>
				))}
			</ul>
		</Card>
	)
}
export default UserList
