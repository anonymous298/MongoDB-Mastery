// import { ObjectId } from "mongodb";


use('firstdb');

// db.myfirstcollection.deleteOne(
//     {
//         _id : new ObjectId('690f0681bea11a881a805a92')
//     }
// )

db.myfirstcollection.deleteMany(
    {name : 'talha'}
)