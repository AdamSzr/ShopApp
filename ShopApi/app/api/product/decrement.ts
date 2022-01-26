import Product from "app/core/model/Product"
import { CreateArray } from "app/core/utils/base"
import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse, Middleware, useQuery } from "blitz"
import db from "db"

const handler: Middleware = async (req, res, next) => {
  const idx = Number(req.query.id)
  const count = Number(req.query.count) || 1

  const product = await db.product.update({
    where: { id: idx },
    data: { count: { decrement: count } },
  })

  return res.status(200).send(product)
}
export default handler
