import { useState } from 'react'
import DeleteModal from './DeleteModal'
import Button from '../UI/Button'

function Delet(props) {
	const [delet, setDelet] = useState(false)
	return (
		<div>
			{delet && (
				<DeleteModal
					onClose={setDelet}
					onDelet={props.onDel}
					id={props.id}
				/>
			)}
			<Button onClick={() => setDelet(true)}>Delete</Button>
		</div>
	)
}
export default Delet
