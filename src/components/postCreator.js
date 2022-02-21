// create and export PostCreator functional component and pass in props
export const PostCreator = ({ setPostContent, submitHandler }) => {
  return (
    <div>
      {/* pass in submitHandler and take the user input to update the post value */}
      <from onSubmit={submitHandler}>
        <input onChange={(e) => setPostContent(e.target.value)} />
        <button type="submit">Post</button>
      </from>
    </div>
  )
}
