import { MongoClient } from "mongodb";

const handler= async(req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        const {title, image, address, description} = data;

        const client = await MongoClient.connect(`mongodb+srv://Shelton:test123@cluster0.qusgr.mongodb.net/meetups?retryWrites=true&w=majority`)
        const db = client.db()

        const meetups = db.collection('meetups');
        const result = await meetups.insertOne(data);

        client.close();

        res.status(201).json({message: 'Meetup added!'})
    }
}

export default handler;