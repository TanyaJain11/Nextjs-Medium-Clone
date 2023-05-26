export default async function handler(req, res) {
    const { email } = req.query;
  
    try {
      await client.connect();
      const db = client.db("your-database-name"); // Replace with your database name
      const collection = db.collection("users");
  
      // Find the user with the matching email
      const user = await collection.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      return res.status(200).json(user);
    } catch (error) {
      console.log("Error retrieving user data:", error);
      return res.status(500).json({ message: "Internal server error" });
    } finally {
      await client.close();
    }
  }
  