import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
const postLists = [];

const blogContent = {}


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/make-post", (req, res)=> {
    res.render("make-post.ejs");
});

app.post("/submit", (req, res)=> {
    
    blogContent.title = req.body.title;
    blogContent.subtitle = req.body.subtitle;
    blogContent.content = req.body.content;
    blogContent.author = req.body.author;
    blogContent.img = req.body.img;
    postLists.push(blogContent);

    res.render("index.ejs", {content: postLists});
});

app.listen(port, ()=>{
    console.log("Server is now running at "+ port)
});

