package com.msgs.tripstory.dao;

<<<<<<< HEAD

public interface TripStoryDAO {

=======
import com.msgs.msgs.entity.tripstory.StoryComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripStoryDAO extends JpaRepository<StoryComment, Integer> {
/*
    @Query("SELECT sc FROM StoryComment sc JOIN sc.userStoryCmnt usc JOIN usc.userImg")
    List<StoryComment> findAllWithUserImg();
*/
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
}

