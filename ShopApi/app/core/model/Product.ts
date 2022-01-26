import { GenerateRandomString, RandomDate, RandomInt } from "../utils/base"

class Product {
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  count: number

  public static random() {
    const prod = new Product()
    prod.id = RandomInt(0, 1000)
    prod.createdAt = RandomDate()
    prod.createdAt = RandomDate()
    prod.name = GenerateRandomString(10)
    prod.count = RandomInt(0, 30)
    return prod
  }
}

// id        Int      @id @default(autoincrement())
// createdAt DateTime @default(now())
// updatedAt DateTime @updatedAt
// name      String
// count     Int

export default Product
