import { useState } from 'react'
import './App.css'
import AddUser from './component/Users/AddUser'
import UserList from './component/Users/UserList'

function App() {
	const [userList, setUserList] = useState([])

	const addUserhandler = (uName, uAge) => {
		setUserList((prevUserList) => {
			return [
				...prevUserList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			]
		})
	}
	
	return (
		<div className='App'>
			<AddUser onAddUser={addUserhandler} />
			<UserList users={userList} onFilter={setUserList} />
		</div>
	)
}

export default App
