// $eq para los campos con un valor igual al especificado
db.amigos.find({"edad":   {$eq: 20 } }).pretty()
// $gt para campos con un valor mayor al especificado
db.amigos.find({"km de distancia": {$gt: 30}}).pretty()
// $lt seleccionará todos los documentos de la colección de inventario donde el valor del campo de cantidad es menor que...
db.amigos.find( { "redes sociales": { $lt: 3 } } )