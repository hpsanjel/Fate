require("dotenv").config();
require("./DBConnect");
const express = require("express");
const cors = require("cors");
const MessagesModel = require("./models/Messages");
const SubscriberModel = require("./models/Subscribers");
const TestimonialsModel = require("./models/Testimonials");
const BlogsModel = require("./models/Blogs");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(cors());

app.get("/getMessages", async (req, res) => {
	const docs = await MessagesModel.find({});
	res.json(docs);
});

app.get("/getTestimonials", async (req, res) => {
	const testi = await TestimonialsModel.find({});
	res.json(testi);
});

app.get("/getBlogs", async (req, res) => {
	const blogs = await BlogsModel.find({});
	res.json(blogs);
});

app.get("/getSubscribers", async (req, res) => {
	try {
		const subscribers = await SubscriberModel.find({});
		res.json(subscribers);
	} catch (e) {
		console.log(Error, e);
	}
});

app.post("/createMessage", async (req, res) => {
	const newMessage = new MessagesModel();
	newMessage.name = req.body.name;
	newMessage.email = req.body.email;
	newMessage.subject = req.body.subject;
	newMessage.message = req.body.message;
	const doc = await newMessage.save();
	console.log(doc);
	res.json(doc);
});

app.post("/addSubscriber", async (req, res) => {
	const newSubscriber = new SubscriberModel();
	newSubscriber.email = req.body.email;

	const docSubs = await newSubscriber.save();
	console.log(docSubs);
	res.json(docSubs);
});

app.post("/generate-essay", async (req, res) => {
	const newPrompt = new PromptModel();
	newPrompt.prompt = req.body.prompt;

	const docPrompt = await newPrompt.save();
	res.json(docPrompt);
});

app.post("/addBlog", async (req, res) => {
	const newBlog = new BlogsModel();
	newBlog.date = req.body.date;
	newBlog.author = req.body.author;
	newBlog.title = req.body.title;
	newBlog.blogpost = req.body.blogpost;

	const docBlogs = await newBlog.save();
	console.log(docBlogs);
	res.json(docBlogs);
});

app.post("/addTestimonial", async (req, res) => {
	const newTestimonial = new TestimonialsModel();
	newTestimonial.name = req.body.name;
	newTestimonial.testimony = req.body.testimony;
	newTestimonial.date = req.body.date;

	const docTesti = await newTestimonial.save();
	console.log(docTesti);
	res.json(docTesti);
});

app.delete("/deleteMessage/:userId", async (req, res) => {
	try {
		const messageId = req.params.messageId;

		const deletedUser = await MessagesModel.findByIdAndDelete(messageId);

		if (!deletedUser) {
			return res.status(404).json({ error: "User not found" });
		}

		res.status(200).json({ message: "User deleted successfully" });
	} catch (error) {
		console.error("Error deleting user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

app.listen(process.env.PORT || 8083, () => {
	console.log("Server is running on port 8083");
});
