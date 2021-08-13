import express from "express";
import cors from "cors"; //cross origin requesrt
import helmet from "helmet"; //for an added layer of security

const zomato = express();

//application middlewers
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

zomato.get("/", (req, res) => {
  res.json({ message: "setup sucessful" });
});

zomato.listen(4000, () => {
  console.log("server is running 🚀");
});
