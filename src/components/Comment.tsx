import { ThumbsUp } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import { format, formatDistanceToNow } from "date-fns";
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    deleteComment: (comment: string) => void;
    publishedAt: Date;
}

export function Comment({ content, deleteComment, publishedAt }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        deleteComment(content)
    }

    function handleLike() {
        setLikeCount(likeCount + 1);
    }

    const publishedDateFormatted = format(publishedAt, "LLLL dd 'at' hh:mm")

    const dateToComment = new Date('2022-11-17 18:00:00')
    const publishedDateRelativeToNow = formatDistanceToNow(dateToComment, { addSuffix: true })

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Karl Schmidt</strong>
                            <time title={publishedDateFormatted} dateTime={publishedDateFormatted}>{publishedDateRelativeToNow}</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLike}>
                        <ThumbsUp />
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}