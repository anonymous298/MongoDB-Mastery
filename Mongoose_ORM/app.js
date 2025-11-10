import { connectDb } from "./lib/config/db.js";
import MyCollection from "./lib/models/myFirstSchema.js";
import ProductModel from "./lib/models/Products.js";

const testingMongoose = async () => {
    await connectDb()

    // await MyCollection.create({
    //     name : 'talha',
    //     email : 'talha@gmail.com',
    //     age : 18,
    //     skills : [
    //         'Python',
    //         'Data Science',
    //         'Machine Learning',
    //         'Deep Learning',
    //         'JavaScript',
    //         'React',
    //         'Next.js',
    //         'Full Stack AI Engineer'
    //     ]
    // })

    // await MyCollection.updateMany(
    //     {name : 'talha'},
    //     {$inc : {age : 1}}
    // )

    // await MyCollection.updateMany(
    //     {name : 'talha'},
    //     {$push : {skills : 'Saas Product Builder'}}
    // )


    const data = await MyCollection.find({})

    console.log('Run Successfully')
    console.log(data)
}

const productsSchema = async () => {
    await connectDb();

    await ProductModel.create(
        {
            name : 'Gaming Mouse',
            category : 'Gaming',
            price : 5000,
            raing : 4.5
        }
    )

    const data = await ProductModel.find({})

    console.log(data)
}



const main = async () => {
    
    await testingMongoose()

    await productsSchema()
}

main()
