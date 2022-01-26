import Product from "app/core/model/Product"
import { CreateArray } from "app/core/utils/base"
import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse, Middleware, useQuery } from "blitz"
import db from "db"
import Cors from "cors"

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET"],
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

  const data = await db.product.findMany({
    select: { id: true, createdAt: true, updatedAt: true, name: true, count: true },
  })

  console.log({ data })
  return res.status(200).send(data)
}
export default handler
