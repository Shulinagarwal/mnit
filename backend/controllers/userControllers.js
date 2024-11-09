const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (req, res) => {
    try {
      const { email } = req.body;
      const newUser = await prisma.user.create({
        data: {
          email
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    } finally {
      await prisma.$disconnect();
    }
  };
  
const postJob = async (req, res) => {
    const { jobTitle, companyName, location, jobDescription, jobType } = req.body;
  
    try {
      const jobPost = await prisma.jobPost.create({
        data: {
          jobTitle,
          companyName,
          location,
          jobDescription,
          jobType,
        },
      });
  
      res.status(200).json({ success: true, jobPost });
    } catch (error) {
      console.error("Error posting job:", error);
      res.status(500).json({ success: false, message: "Failed to post job." });
    }
  };

const getJobPost = async(req,res)=>{
    try {
        const jobPostings = await prisma.jobPost.findMany(); // Adjust table name to match your schema
        res.json(jobPostings);
      } catch (error) {
        console.error("Error fetching job postings:", error);
        res.status(500).json({ message: "Error fetching job postings" });
      }
}
  
  module.exports = {
    createUser,
    postJob,
    getJobPost,
  };