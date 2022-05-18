import { useState } from 'react'
import Button from '../UI/Button'
import styles from './AddUser.module.css'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
	const [enteredUsername, setenteredUsername] = useState('')
	const [enteredAge, setenteredAge] = useState('')
	const [error, setError] = useState(false)

	const addUserHandler = (event) => {
		event.preventDefault()
		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			setError({
				title: 'invalid input',
				message: 'Please enter a valid name and age (no empty)',
			})
			return
		}
		if (+enteredAge < 1) {
			setError({
				title: 'invalid age',
				message: 'Please enter a valid age (>0)',
			})
			return
		}
		props.onAddUser(enteredUsername, enteredAge)
		setenteredUsername('')
		setenteredAge('')
	}
	const usernameChangeHandler = (event) => {
		setenteredUsername(event.target.value)
	}
	const ageChangeHandler = (event) => {
		setenteredAge(event.target.value)
	}
	const errorHandler = (event) => {
		setError(null)        
	}
	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						id='username'
						value={enteredUsername}
						onChange={usernameChangeHandler}
					></input>
					<label htmlFor='age'>Age</label>
					<input
						type='number'
						id='age'
						value={enteredAge}
						onChange={ageChangeHandler}
					></input>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</>
	)
}

export default AddUser
