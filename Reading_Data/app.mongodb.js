use('firstdb');

// db.myfirstcollection.find({})

// db.myfirstcollection.findOne(
//     {
//         category : 'Computers'
//     }
// )

// db.myfirstcollection.find(
//     {
//         category : 'Computers'
//     }
// )

// Comparission Operators

// db.myfirstcollection.find(
//     {
//         price : {$lt : 10000}
//     }
// )

// Logical Operators

// db.myfirstcollection.find(
//     {
//         $or : [
//             {category : 'Electronics'},
//             {price : {$gt : 50000}}
//         ]
//     }
// )

// db.myfirstcollection.find(
//     {
//         $and : [
//             {category : 'Computers'},
//             {price : {$gt : 80000}}
//         ]
//     }
// )

// db.myfirstcollection.find(
//     {},
//     {name: 1}
// )

db.myfirstcollection.find().skip(10).limit(10)