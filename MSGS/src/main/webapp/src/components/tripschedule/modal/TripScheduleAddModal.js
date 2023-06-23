import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import styleModal from "./TripScheduleAddModal.module.css";

import TripScheduleAddPlace from "./TripScheduleAddPlace";
import SelectedArea from "./SelectedArea";

const TripScheduleAddModal = ({ setAddPlaceModal, cityName }) => {
		
	// 현재 모달창 닫기
	const closeModal = () => {
		setAddPlaceModal(false)
	}

    // 숙박-장소 탭 전환
    const [isStaySelected, setIsStaySelected] = useState(true);
    const stayChangeHandler = () => {
        setIsStaySelected(true);
    };
    const placeChangeHandler = () => {
        setIsStaySelected(false);
    };

    // 선택된 아이템 담을 배열
    const [checkedPlaces, setCheckedPlaces] = useState([]);
    const [checkedStay, setCheckedStay] = useState("");

    // 숙박 목록의 체크 버튼 클릭 시
    const stayCheckHandler = (isChecked, id) => {
        if (checkedStay !== id) {
            setCheckedStay(id);
        } else {
            setCheckedStay("");
        }
    };

    // 장소 목록의 체크 버튼 클릭 시
    const placeCheckHandler = (isChecked, id) => {
        if (isChecked) {
            if (checkedPlaces.length > 6) {
                feedbackHandler();
            } else {
                setCheckedPlaces((prev) => [...prev, id]); // 선택
            }
        } else {
            setCheckedPlaces(checkedPlaces.filter((el) => el !== id)); // 선택 해제
        }
    };

    // 선택된 아이템 X 클릭 시
    const removeHandler = (isStay, id) => {
        if (isStay) {
            setCheckedStay("");
        } else {
            setCheckedPlaces(checkedPlaces.filter((el) => el !== id)); // 선택 해제
        }
    };

    // 장소 7개 초과 선택 시 경고창
    const [showFeedback, setShowFeedback] = useState(false);
    // const [opacity, setOpacity] = useState(100); // 사라질 때 투명도 변화

    // 함수 호출 시 창 띄웠다가 타임아웃 후 제거
    const feedbackHandler = () => {
        setShowFeedback(true);
        setTimeout(() => {
            setShowFeedback(false);
        }, 1500);
    };

    return (
        <div className={styleModal["modal-container"]}>
            <div className={styleModal["modal-wrapper"]}>
                <div className={styleModal["modal-top"]}>
                    {/* Search Container */}
                    <div className={styleModal["modal-search"]}>
                        <span>
                            <img
                                className={styleModal["icon-search"]}
                                src={
                                    process.env.PUBLIC_URL +
                                    "images/icon_search.png"
                                }
                                alt="icon_search"
                            />
                        </span>
                        <div>
                            <input
                                className={styleModal["modal-input"]}
                                placeholder="관광지/맛집/숙소 검색"
                            />
                        </div>
                    </div>
                    <img
                        className={styleModal["icon-close"]}
                        src={process.env.PUBLIC_URL + "/images/icon_close.png"}
                        alt="icon_close"
                        onClick={closeModal}
                    />
                </div>

                {/* Stay or Place Container */}
                <div className={styleModal["modal-stay-place"]}>
                    <div
                        className={`${styleModal["tab-btn"]} ${
                            isStaySelected && styleModal["selected"]
                        }`}
                        onClick={stayChangeHandler}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL + "images/icon_stay.png"
                            }
                            alt="icon_stay"
                        />
                        <span>숙박</span>
                    </div>

                    <div
                        className={`${styleModal["tab-btn"]} ${
                            isStaySelected || styleModal["selected"]
                        }`}
                        onClick={placeChangeHandler}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL + "images/icon_place.png"
                            }
                            alt="icon_place"
                        />
                        <span>장소</span>
                    </div>
                </div>

                <div className={styleModal["stay-place-title"]}>
                    DAY 1 추천 {isStaySelected ? "숙박" : "장소"}
                </div>

                <TripScheduleAddPlace
                    isStaySelected={isStaySelected}
                    checkedItems={isStaySelected ? checkedStay : checkedPlaces}
                    checkHandler={
                        isStaySelected ? stayCheckHandler : placeCheckHandler
                    }
                />

                <SelectedArea
                    checkedStay={checkedStay}
                    checkedPlaces={checkedPlaces}
                    removeHandler={removeHandler}
                />

                <button
                    className={styleModal["select-complete-btn"]}
                    onClick={closeModal}
                >
                    선택 완료
                </button>
            </div>

            {showFeedback && (
                <div
                    className={styleModal["feedback-box"]}
                    // style={{ opacity: `${opacity}` }}
                >
                    장소는 7개까지 선택할 수 있습니다.
                </div>
            )}
        </div>
    );
};

export default TripScheduleAddModal;
