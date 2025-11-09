use('firstdb');

// db.myfirstcollection.aggregate(
//     [
//         { stage },
//         { stage },
//         { stage }
//     ]
// )

// db.myfirstcollection.aggregate(
//     [
//         {$match : {'name' : 'Gaming Laptop'}},
//         {$project : {name : 1, price: 1, category: 1, quantity : 1}},
//         {$group : {
//             _id : '$category',
//             totalsales : {$sum : {$multiply : ['$price',' $quantity']}}
//         }},
//         {$sort : {totalsales: -1}}
//     ]
// )

db.myfirstcollection.aggregate(
    [
        {$match : {'ratings' : {$gt : 4.0}}},
        {$group : {
            _id : "$category",
            totalStock : {$sum : "$stock"},
            totalPrice : {$sum : {$multiply : ["$price", "$stock"]}}
        }},
        {$sort : {'totalPrice' : -1}},
        {$limit : 1}
    ]
)