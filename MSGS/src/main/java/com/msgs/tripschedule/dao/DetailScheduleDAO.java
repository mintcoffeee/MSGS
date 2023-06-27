package com.msgs.tripschedule.dao;

import com.msgs.msgs.entity.tripschedule.DetailScheduleID;
import com.msgs.msgs.entity.tripschedule.TripDetailSchedule;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailScheduleDAO extends JpaRepository<TripDetailSchedule, DetailScheduleID> {

    //고치기
//    @Modifying
//    @Query("INSERT INTO TripDetailSchedule (...) VALUES (...)")
//    void insertTripDetailSchedule(TripDetailSchedule tripDetail);

}
