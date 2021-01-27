import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPost, fetchPostComments } from '../redux/actions/posts';

const DetailedPostItem = ({
  selectedPost = {},
  selectedPostComments = [],
  fetchPost,
  fetchPostComments,
}) => {
  const { id } = useParams();
  useEffect(() => {
    fetchPost(id);
    fetchPostComments(id);
  }, []);

  if (!selectedPost) {
    return <p>Pas de selectedPost</p>;
  }
  return (
    <>
      <div>
        <h2>{selectedPost.title}</h2>
        <p>{selectedPost.body}</p>
      </div>

      {selectedPostComments.length ? (
        <div className="list">
          {selectedPostComments.map((item) => {
            return (
              <div key={item.id} className="item comment">
                <h3>{item.name}</h3>
                <h4>
                  Comment from :<br />
                  {item.email}
                </h4>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>pas de commentaires pour ce post</p>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  selectedPost: state.postsReducer.selectedPost,
  selectedPostComments: state.postsReducer.selectedPostComments,
});

const mapDispatchToProps = {
  fetchPost: (id) => fetchPost(id),
  fetchPostComments: (id) => fetchPostComments(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedPostItem);
