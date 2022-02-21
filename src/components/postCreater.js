export const PostCreator = () => {
  return (
    <div>
      <from onSubmit={submitHandler}>
        <input onChange={(e) => setpostContent(e.target.value)} />
        <button type="submit">Post</button>
      </from>
    </div>
  )
}
