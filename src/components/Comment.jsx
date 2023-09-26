import styles from './Comment.module.css'

import { Trash } from 'phosphor-react'

import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'


export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/56547134?v=4" alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>William Douglas</strong>
                            <time title='11  de maior às 08:30h' dateTime='2023-05-11 08:30:30'>Cerda de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                           <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}