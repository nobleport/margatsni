import { connect } from 'react-redux';
import CommentIndexItem from './comment_index_item';
import { createCommentLike } from "../../actions/comment_actions";
import { deleteCommentLike, deleteComment } from "../../actions/comment_actions";

const mSTP = state => {
    return {
        comments: state.entities.comments,
        currentUser: state.session.currentUser,
        allLikes: state.entities.likes
    }
}

const mDTP = dispatch => {
    return {
        createCommentLike: (like)=>dispatch(createCommentLike(like)),
        deleteCommentLike: (likeId)=>dispatch(deleteCommentLike(likeId)),
        deleteComment: (commentId)=>dispatch(deleteComment(commentId))
    }
}

export default connect(mSTP, mDTP)(CommentIndexItem)