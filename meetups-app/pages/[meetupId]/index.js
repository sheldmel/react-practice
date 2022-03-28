import React from "react";
import { useRouter } from "next/router";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsPage = () => {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  return <MeetupDetails image="" title="" address="" description="" />;
};

export default MeetupDetailsPage;
