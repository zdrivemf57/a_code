export default function TourDetail({ tour }) {
  let content;

  if (!tour) {
    content = (
      <div className="alert alert-warning text-center">
        詳細を知りたいツアーをクリックしてください
      </div>
    );
  } else {
    content = (
      <div className="card">
        {tour?.photo && (
          <img
            src={`http://localhost:8080/photos/${tour?.photo}`}
            className="card-img-top"
          />
        )}
        <div className="card-body">
          <h2 className="h5 card-title">{tour?.title}</h2>
          {tour?.area && <h3 className="h6 mt-3">エリア: {tour?.area}</h3>}
          {tour?.description && (
            <p className="card-text">{tour?.description}</p>
          )}
          <h3 className="h6">ガイド: {tour?.guide?.name}</h3>
          <p>連絡先: {tour?.guide?.email}</p>
        </div>
      </div>
    );
  }

  return <div className="col-12 col-lg-4">{content}</div>;
}
