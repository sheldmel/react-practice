import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetailsPage = (props) => {
  return <MeetupDetails image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description} />;
};

export const getStaticPaths = async () => {

  const client = await MongoClient.connect(`mongodb+srv://Shelton:test123@cluster0.qusgr.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db()
    const meetups = db.collection('meetups');
    const result = await meetups.find({}, {_id: 1}).toArray();
    client.close();


  return {
    fallback: false,
    paths: result.map(meetup => ({ params: {meetupId: meetup._id.toString()}}))
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(`mongodb+srv://Shelton:test123@cluster0.qusgr.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db()
    const meetups = db.collection('meetups');
    const result = await meetups.findOne({_id: ObjectId(meetupId)});
    client.close();

  return {
    props: {
      meetupData: {
        id: result._id.toString(),
        title: result.title,
        address: result.address,
        image: result.image,
        description: result.description
      }
    },
    revalidate: 1,
  };
};

export default MeetupDetailsPage;
