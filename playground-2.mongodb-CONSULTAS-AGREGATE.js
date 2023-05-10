use("sample_airbnb")

//1.  Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones, 
// cuál es la propiedad con mayor número de servicios ("amenities") de la colección.


//  db.listingsAndReviews.aggregate([

// {
//     $project: {
//       _id:"$amenities",
//       maxServicios:{$size:"$amenities"},
//       name:true
//     }
// },
// {
//   $sort: {
//     maxServicios: -1
//   }
// },
// {
//     $limit: 1
// }

// ]);




// 2.  Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones, 
// el número de propiedades que tienen conexión a Internet, sea desde Wifi o desde cable (Ethernet). 
// Nota. Revise el campo amenities (“servicios”)


// db.listingsAndReviews.aggregate([
//     {$match: {
//         "amenities": {
//             $in: ["Wifi","Ethernet" ]   
//     }
//     }},
//     {
//       $count: 'NroPropiedades'
//     }
// ])





// 3. Usando la colección listingsAndReviews de sample_airbnb, encuentre mediante el uso de agregaciones, 
// todas las propiedades que hayan recibido 50 o más comentarios, que la valoración ("review_score_rating") 
// sea mayor o igual a 80, que cuenten con conexión a Internet vía cable y que estén ubicadas en Brazil.

// db.listingsAndReviews.aggregate([
//   { $match: {
//         "address.country":{$eq:"Brazil"},
//         "review_scores.review_scores_rating":{
//         $gte:80 },
//         "number_of_review":{$gte:50},
//         "amenities":{$eq:"Ethernet connection"}
    
//     }

//   },
//   { $project: {
//         _id "",
//         name: 1,
//         "address.country": 1,
//         number_of_review: 1,
//         review_scores: 1,
//         reviews: 1,
//         amenities: 1
//     }
//   }
// ])




// 4. Usando la colección listingsAndReviews de sample_airbnb, muestre el costo promedio de una habitación en 
// cada país para las propiedades de tipo casa.

// db.listingsAndReviews.aggregate([
//   {
//     $match: {
//       "property_type": "House"
//     }
//   },
//   {
//     $group: {
//       _id: "$address.country",
//       avg_price: { $avg: "$price" }
//     }
//   }
// ])




// 5. Utilizando la base datos de sample_restaurants, construir un tablero que nos permita mostrar:

// //¿Cuántos restaurantes hay en total?

// use("sample_restaurants")

// db.restaurants.count()




// //¿Cuál es el distrito que cuenta con el mayor número de restaurantes?


// db.restaurants.aggregate([
//   {
//     $group: {
//       _id: "$borough",
//       count: { $sum: 1 }
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   },
//   {
//     $limit: 1
//   }
// ])




//  //¿Cuántos restaurantes hay por cada código postal?

// db.restaurants.aggregate([
//   {
//     $group: {
//       _id: "$address.zipcode",
//       count: { $sum: 1 }
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   }
// ])



// ¿Cuántos restaurantes hay por cada tipo de cocina?

// db.restaurants.aggregate([
//   {
//     $unwind: "$cuisine"
//   },
//   {
//     $group: {
//       _id: "$cuisine",
//       count: { $sum: 1 }
//     }
//   },
//   {
//     $sort: {
//       count: -1
//     }
//   }
// ])