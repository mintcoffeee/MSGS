import React from 'react'
import style from './ScheduleLineAndBlock.module.css'

export default function ScheduleLineAndBlock({ orderDay, order, placeOrder, type, title, location, contentid, planListHandler }) {
	const writeMemo = (e) => {
		planListHandler((prevObj) => {
			const updatedObj = { ...prevObj } 

			updatedObj[orderDay] = updatedObj[orderDay].map((item) => {
				return item.order === order ? { ...item, title: e.target.value } : { ...item }
			})
				return updatedObj
			})
	}

	function resultHtml1() {
		if (type === 'memo') {
			//메모 블록을 추가하는 경우
			return (
				<div className={style['order-memo-label-wrapper']}>
					<div className={style['order-memo-label']}></div>
				</div>
			)
		} else if (order === 1) {
			//첫번째로 들어오는 장소블록일 경우
			return type === '숙박' ? (
				<div className={style['order-dorm-label-wrapper']}>
					<div className={style['order-dorm-label']}></div>
				</div>
			) : (
				<div className={style['order-label-wrapper']}>
					<div className={style['order-label']}>{placeOrder}</div>
				</div>
			)
		} else {
			//중간 or 끝에 들어오는 블록
			return type === '숙박' ? (
				<>
					<div className={style['order-dorm-label-wrapper']}>
						<div className={style['order-dorm-label']}></div>
					</div>
					<div className={style['distance-label-wrapper']}>
						<div className={style['distance-label']}>1.6km</div>
					</div>
				</>
			) : (
				<>
					<div className={style['order-label-wrapper']}>
						<div className={style['order-label']}>{placeOrder}</div>
					</div>
					<div className={style['distance-label-wrapper']}>
						<div className={style['distance-label']}>1.6km</div>
					</div>
				</>
			)
		}
	}

	function resultHtml2() {
		if (type === 'memo') {
			//메모 블록인 경우
			return (
				<div className={style['schedule-block']}>
					{/* <input type='text' className={style[ 'input-memo' ]} onChange={writeMemo} value={title}></input> */}
					<input type='text' className={style['input-memo']} onChange={writeMemo} defaultValue={title}></input>
				</div>
			)
		} else {
			//장소 or 숙박 블록인 경우
			return (
				<div className={style['schedule-block']} onClick={() => window.open(`http://localhost:3000/tripLoc/${contentid}`, '_blank')}>
					<p className={style['text-place']}>{title}</p>
					<p className={style['text-place-type']}>
						{type} · {location}
					</p>
				</div>
			)
		}
	}

	return (
		<div className={style['line-and-block-wrapper']}>
			<div className={style['schedule-line-wrapper']}>
				<div className={style['schedule-line-left']}>{resultHtml1()}</div>
				<div className={style['schedule-line-right']}></div>
			</div>

			{resultHtml2()}
		</div>
	)
}
