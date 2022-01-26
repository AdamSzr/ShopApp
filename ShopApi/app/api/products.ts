import Product from "app/core/model/Product"
import { CreateArray } from "app/core/utils/base"
import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse, Middleware, useQuery } from "blitz"
import db from "db"

const handler: Middleware = async (req, res, next) => {
  const data = await db.product.findMany({
    select: { id: true, createdAt: true, updatedAt: true, name: true, count: true },
  })

  console.log({ data })
  return res.status(200).send(data)
}
export default handler
