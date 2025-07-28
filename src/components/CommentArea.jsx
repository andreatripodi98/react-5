import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    isError: false,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin && this.props.asin) {
      this.fetchComments(this.props.asin)
    }
  }

  fetchComments = async (asin) => {
    this.setState({ isLoading: true, isError: false })

    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          headers: {
            Authorization: 'Bearer inserisci-qui-il-tuo-token',
          },
        }
      )

      if (response.ok) {
        let comments = await response.json()
        this.setState({ comments, isLoading: false, isError: false })
      } else {
        this.setState({ isLoading: false, isError: true })
      }
    } catch (error) {
      console.log(error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  render() {
    const { comments, isLoading, isError } = this.state

    if (!this.props.asin) return <p>Seleziona un libro per vedere i commenti.</p>

    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    )
  }
}

export default CommentArea

