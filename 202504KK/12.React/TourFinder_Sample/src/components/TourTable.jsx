export default function TourTable({ tours, setTourId }) {
  let content;

  if (!tours) {
    content = "";
  } else if (tours.length === 0) {
    content = (
      <div className="alert alert-danger">該当のツアーが存在しません</div>
    );
  } else {
    content = (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ツアー名</th>
            <th>エリア</th>
            <th>ガイド</th>
          </tr>
        </thead>
        <tbody>
          {tours?.map((tour) => (
            <tr
              key={tour?.id}
              style={{ cursor: "pointer" }}
              onClick={() => setTourId(tour?.id)}
            >
              <td>{tour?.title}</td>
              <td>{tour?.area}</td>
              <td>{tour?.guide?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return <div className="col">{content}</div>;
}
