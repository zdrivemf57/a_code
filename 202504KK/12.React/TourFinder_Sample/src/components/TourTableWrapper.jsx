import { useState } from "react";
import TourDetail from "./TourDetail";
import TourSearchForm from "./TourSearchForm";
import TourTable from "./TourTable";
import useGetAndSetData from "../hooks/useGetAndSetData";
import { getTourDetail, getTours } from "../helpers/tourApp";

/**
 * 管理するステート:
 * 1. 絞り込み条件のフォーム入力値(入力値はTourSearchFormから渡してもらう)
 * 2. ツアーリスト
 * 3. 詳細を表示するツアーのID(IDはTourTableから渡してもらう)
 * 4. ツアー詳細
 */
export default function TourTableWrapper() {
  const [formData, setFormData] = useState({ guideId: "", keyword: "" });
  const [tours, setTours] = useState(null);
  const [tourId, setTourId] = useState(null);
  const [tour, setTour] = useState(null);

  useGetAndSetData(() => getTours(formData), setTours, [formData]);
  useGetAndSetData(() => getTourDetail(tourId), setTour, [tourId]);

  return (
    <>
      <TourSearchForm setFormData={setFormData} />
      <div className="row pb-4">
        <TourTable tours={tours} setTourId={setTourId} />
        <TourDetail tour={tour} />
      </div>
    </>
  );
}
