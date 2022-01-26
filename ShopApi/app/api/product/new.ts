

import Product from "app/core/model/Product"
import { CreateArray } from "app/core/utils/base"
import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse, Middleware, useQuery } from "blitz"
import db from "db"

const handler: Middleware = async (req, res, next) => {
    const properties = JSON.parse(req.body)
    let name = properties.name as string
    let count = Number(properties.count)
    console.log({name,count})
    
    const prod = await db.product.create({data: {name,count} })
    console.log({prod})
    return res.status(200).send(prod)
}
export default handler