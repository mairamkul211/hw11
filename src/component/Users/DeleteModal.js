import styles from '../UI/ErrorModal.module.css'
import Card from '../UI/Card'
import styleBtn from '../Users/DeleteModal.module.css'

function DeleteModal(props) {
	// console.log(props.id)
	return (
		<div className={styles.backdrop}>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>Удаления пользователя</h2>
				</header>
				<div className={styles.content}>
					<p>Вы действительно хотите удалить?</p>
				</div>
				<footer className={styles.actions}>
					<button className={styleBtn.btn_da} id={props.id} onClick={props.onDelet}>
						Да
					</button>
					<button className={styleBtn.btn_net}  onClick={() => props.onClose(false)}>Нет</button>
				</footer>
			</Card>
		</div>
	)
}
export default DeleteModal
