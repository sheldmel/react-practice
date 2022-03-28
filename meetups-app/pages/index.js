import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://secure-content.meetupstatic.com/images/classic-events/497288721/676x380.webp",
    address: "123 Abc street",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/39/56/25/sky-gazer-meetup-place.jpg",
    address: "112 xqw street",
    description: "This is the second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />
};

export default HomePage;
