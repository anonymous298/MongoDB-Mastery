use('firstdb');

// db.myfirstcollection.updateOne(
//     {name : 'talha'},
//     {$set : {age : 20}}
// )

db.myfirstcollection.updateMany(
    {name : 'talha'},
    {$inc : {age : 1}}
)

// db.myfirstcollection.find(
//     {'name' : 'Wireless Mouse'}
// )

db.myfirstcollection.updateMany(
    {'name' : 'Wireless Mouse'},
    {$push : {tags : 'super fast'}}
)