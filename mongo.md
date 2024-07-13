``` mongoose
C:\Users\Rohit>mongosh
Current Mongosh Log ID: 6687c39b6236ccd13dcc8987
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10
Using MongoDB:          7.0.12
Using Mongosh:          2.2.10

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-06-30T13:02:11.485+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
admin       40.00 KiB
amazon      72.00 KiB
college     72.00 KiB
config      72.00 KiB
local       40.00 KiB
test        80.00 KiB
wanderlust  40.00 KiB
whatsapp    72.00 KiB
test> use wanderlust
switched to db wanderlust
wanderlust> db.listings.find()
[
  {
    _id: ObjectId('6687eb180857686d1ecf14fa'),
    title: 'New Dest',
    description: ' New One',
    image: 'https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8',
    price: 1200,
    location: 'Calangute, Goa',
    country: 'India',
    __v: 0
  }
]
wanderlust> show collections
listings
wanderlust>
```