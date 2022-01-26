import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse, Middleware, useQuery } from "blitz"
import db from "db"

const ping: Middleware = (req, res) => {
  res.status(200).json({ ping: "pong" })
  res.end()
}
export default ping