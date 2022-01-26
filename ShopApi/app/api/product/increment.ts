import Product from "app/core/model/Product"
import { CreateArray } from "app/core/utils/base"
import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse, Middleware, useQuery } from "blitz"
import db from "db"

import Cors from "cors"

// Initializing the cors middleware
const cors = Cors({
  methods: ["PUT"],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  // console.log("inside runMIDDLEWARE")
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const handler: Middleware = async (req, res, next) => {
  await runMiddleware(req, res, cors)

  const idx = Number(req.query.id)
  const count = Number(req.query.count) || 1

  const product = await db.product.update({
    where: { id: idx },
    data: { count: { increment: count } },
  })

  return res.status(200).send(product)
}
export default handler
