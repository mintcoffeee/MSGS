import React, { useState } from "react";

import TripScheduleAddStayItem from "./TripScheduleAddStayItem";

import items from "../modal-data/TripScheduleAddStayData";

import styleModalStay from "./TripScheduleAddStay.module.css";

const TripScheduleAddStay = () => {

  // checkbox가 여러개일 떄, 1개만 선택할 수 있는 유효성 검사
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('staySelect')
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
  }

  return (
    <div className={styleModalStay["trip-schedule-add-stay"]}>
      <div className={styleModalStay["trip-schedule-add-stay-item"]}>
        {items.map((data) => (
          <TripScheduleAddStayItem
            key={data.id}
            stayId={data.id}
            stayImg={data.stayImg}
            stayName={data.stayName}
            stayLocation={data.stayLocation}
            stayType={data.stayType}
            checkOnlyOne={checkOnlyOne}
          />
        ))}
      </div>
    </div>
  );
};

export default TripScheduleAddStay;