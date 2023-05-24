import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";

const FilterTopBar = ({count, sort, setSort}) => {
  const { length } = useSelector((state) => state.properties);
  const { statusType, featured } = useSelector((state) => state.filter);
  const [getStatus, setStatus] = useState(statusType);
  // const [getFeatured, setFeatured] = useState(featured);



  const dispatch = useDispatch();

  // add status
  useEffect(() => {
    dispatch(addStatusType(getStatus));
  }, [dispatch, addStatusType, getStatus]);

  // add featured
  // useEffect(() => {
  //   dispatch(addFeatured(getFeatured));
  // }, [dispatch, addFeatured, getFeatured]);

  // clear filter
  useEffect(() => {
    statusType === "" && setStatus("");
    // featured === "" && setFeatured("");
  }, [statusType, setStatus]);

  return (
    <>
      <div className="col-sm-12 col-md-4 col-lg-4 col-xl-5">
        <div className="left_area tac-xsd">
          <p>
            <span className={count === 0 ? "text-danger" : undefined}>
              {count}{" "}
            </span>
            {count !== 0 ? (
              "  عقارات    "
            ) : (
              <span className="text-danger">لا يوجد نتائج </span>
            )}
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-7">
        <div className="right_area text-end tac-xsd">
          <ul>
            {/* <li className="list-inline-item">
              <span className="stts">Status:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setStatus(e.target.value)}
                value={getStatus}
              >
                <option value="">All Status</option>
                <option value="old">Old</option>
                <option value="recent">Recent</option>
              </select>
            </li> */}
            <li className="list-inline-item">
              <span className="shrtby">ترتيب حسب:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setSort(e.target.value)}
                value={sort}
              >
                <option value="">جميع العقارات</option>
                <option value="faetured">العقارات المميزة</option>
                <option value="lowPrice">الأقل سعرا</option>
                <option value="recent">أحدث العقارات</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default FilterTopBar;
