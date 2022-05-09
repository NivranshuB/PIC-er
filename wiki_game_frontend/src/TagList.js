export default function TagList(props) {
  return (
    <div className="tagList">
      {props.tagArray.map((tag) => (
        <p>{tag}</p>
      ))}
    </div>
  );
}