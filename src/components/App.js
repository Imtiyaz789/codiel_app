import React from 'react'
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/posts'
class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  
  render() {
    // console.log("props", this.props);
    const {posts} = this.props;
    return (
      <>
        <div className="posts-list">
          {posts.map(post => (
            <div className="post-wrapper" key={post.id}>
              <div className="post-header">
                <div className="post-avatar">
                  <img src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177440.png?token=exp=1636466923~hmac=ef623baf7906428b1ce1173e2088a74e" alt="user post"/>
                  <div>
                    <span className="post-author">{post.user.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

function mapStateToProps(state){
  return{
    posts:state.posts,
  }
}

export default connect(mapStateToProps) (App);
