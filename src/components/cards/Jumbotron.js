
// Create a custom Jumbotron component
// p-5 is padding
// lead to make the paragraph stand out
// Use .container-fluid for a full width container, spanning the entire width of the viewport
// use destructuring from props
export default function Jumbotron({title, subTitle}) {
  return (
    <div
      className="container-fluid jumbotron"
      style={{ marginTop: "-8px", height: "200px" }}
    >
      <div className="row">
        <div className="col text-center p-5">
          <h1 className="fw-bold">{title}</h1>
          <p className="lead">{subTitle}</p>
        </div>
      </div>
    </div>
  );
}
