import MeetupList from "../components/meetups/MeetupList";

import { MongoClient } from "mongodb";


const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async() => {
    const client = await MongoClient.connect(`mongodb+srv://Shelton:test123@cluster0.qusgr.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db()
    const meetups = db.collection('meetups');
    const result = await meetups.find().toArray();
    client.close();

    return {
        props: {
            meetups: result.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
}

export default HomePage;
