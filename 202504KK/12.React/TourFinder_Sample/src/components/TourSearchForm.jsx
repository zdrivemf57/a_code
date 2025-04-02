import { useRef, useState } from "react";
import useGetAndSetData from "../hooks/useGetAndSetData";
import { getTourGuides } from "../helpers/tourApp";

export default function TourSearchForm({ setFormData }) {
  const guideRef = useRef();
  const keywordRef = useRef();

  const [guides, setGuides] = useState([]);

  useGetAndSetData(getTourGuides, setGuides, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const guideId = guideRef.current.value;
    const keyword = keywordRef.current.value;
    setFormData({ guideId, keyword });
  };

  return (
    <form className="row my-4" onSubmit={handleSearch}>
      <div className="w-25">
        <select className="form-control" ref={guideRef}>
          <option value="">全ツアーガイド</option>
          {guides?.map((guide) => (
            <option key={guide?.id} value={guide?.id}>
              {guide?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-50">
        <input
          className="form-control"
          type="text"
          placeholder="検索ワード"
          ref={keywordRef}
        />
      </div>
      <div className="w-25">
        <input className="btn btn-secondary" type="submit" value="SEARCH" />
      </div>
    </form>
  );
}
