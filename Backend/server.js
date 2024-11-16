import dotenv from "dotenv";
dotenv.config();
import connectToDB from "./DBConnect.js";
import express from "express";
import cors from "cors";
import MessagesModel from "./models/Messages.js";
import SubscriberModel from "./models/Subscribers.js";
import TestimonialsModel from "./models/Testimonials.js";
import CallbackModel from "./models/Callback.js";
import BlogsModel from "./models/Blogs.js";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path"; // Add this line
import { fileURLToPath } from "url"; // For handling ES Modules
import fs from "fs"; // File system module to check and create directories

// For ES Modules: Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use(cors());
connectToDB();

const uploadsDir = path.join(__dirname, "../public/uploads");
if (!fs.existsSync(uploadsDir)) {
	fs.mkdirSync(uploadsDir); // Create the uploads directory if it doesn't exist
}

// Set up Multer for file uploads
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadsDir);
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const upload = multer({ storage });

// Static folder to serve uploaded files
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")));

app.get("/getMessages", async (req, res) => {
	const docs = await MessagesModel.find({});
	res.json(docs);
});

app.get("/getTestimonials", async (req, res) => {
	const testi = await TestimonialsModel.find({});
	res.json(testi);
});

app.get("/blogs", async (req, res) => {
	try {
		const blogs = await BlogsModel.find();
		res.status(200).json(blogs);
	} catch (error) {
		console.error("Error fetching blogs:", error);
		res.status(500).json({ message: "Internal server error" });
	}
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
app.post("/addCallback", async (req, res) => {
	try {
		const { name, email, phone } = req.body;

		// Validate input data
		if (!name || !email || !phone) {
			return res.status(400).json({ error: "All fields (name, email, phone) are required." });
		}

		// const existingCallbackemail = await CallbackModel.findOne({ email });
		// if (existingCallbackemail) {
		// 	return res.status(409).json({ error: "This email is already in use." }); // 409 Conflict
		// }

		// const existingCallbackphone = await CallbackModel.findOne({ phone });
		// if (existingCallbackphone) {
		// 	return res.status(409).json({ error: "This phone is already in use." }); // 409 Conflict
		// }

		// Create and save new callback entry
		const newCallback = new CallbackModel({ name, email, phone });
		const savedCallback = await newCallback.save();

		// Log and send the saved document as the response
		console.log("New Callback Saved:", savedCallback);
		return res.status(201).json(savedCallback);
	} catch (error) {
		console.error("Error saving callback:", error);
		return res.status(500).json({ error: "An error occurred while saving the callback." });
	}
});

app.post("/addSubscriber", async (req, res) => {
	try {
		const { email } = req.body;

		// Validate email
		if (!email) {
			return res.status(400).json({ success: false, message: "Email is required" });
		}

		// Check for duplicate subscribers (if required)
		const existingSubscriber = await SubscriberModel.findOne({ email });
		if (existingSubscriber) {
			return res.status(400).json({ success: false, message: "Email is already subscribed" });
		}

		// Create a new subscriber
		const newSubscriber = new SubscriberModel({ email });

		// Save the subscriber
		const savedSubscriber = await newSubscriber.save();

		// console.log("New subscriber added:", savedSubscriber);
		res.status(201).json({ success: true, message: "Thank you for subscribing.", subscriber: savedSubscriber });
	} catch (error) {
		// console.error("Error adding subscriber:", error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
});

app.post("/generate-essay", async (req, res) => {
	const newPrompt = new PromptModel();
	newPrompt.prompt = req.body.prompt;

	const docPrompt = await newPrompt.save();
	res.json(docPrompt);
});

// app.post("/addBlog", async (req, res) => {
// 	const newBlog = new BlogsModel();
// 	newBlog.date = req.body.date;
// 	newBlog.author = req.body.author;
// 	newBlog.title = req.body.title;
// 	newBlog.blogpost = req.body.blogpost;

// 	const docBlogs = await newBlog.save();
// 	console.log(docBlogs);
// 	res.json(docBlogs);
// });

app.post("/addBlog", upload.single("picture"), async (req, res) => {
	try {
		const { date, author, title, blogpost } = req.body;
		const picture = req.file ? `/uploads/${req.file.filename}` : ""; // Relative file path to be saved in the database
		console.log(req.file);
		console.log(req.body);
		// Create a new blog document
		const newBlog = new BlogsModel({
			date,
			author,
			title,
			blogpost,
			picture,
		});

		// Save the blog to the database
		await newBlog.save();
		res.status(201).json({ message: "Blog post added successfully!" });
	} catch (error) {
		console.error("Error adding blog post:", error);
		res.status(500).json({ message: "Internal server error" });
	}
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
