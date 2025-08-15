import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from "path";

// Add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,
      category: req.body.category
    });

    await food.save();
    res.json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({ success: false, message: "Failed to add food item" });
  }
};

// Get all food items with full image URL
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    const updatedFoods = foods.map(food => ({
      ...food._doc,
      image: `${req.protocol}://${req.get("host")}/uploads/${food.image}`
    }));
    res.json({ success: true, data: updatedFoods });
  } catch (error) {
    console.error("Error fetching food list:", error);
    res.status(500).json({ success: false, message: "Failed to fetch food list" });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    if (food.image) {
      const filePath = path.join("uploads", food.image);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.warn("Image file not found, skipping delete:", filePath);
        }
      });
    }

    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    console.error("Error removing food:", error);
    res.status(500).json({ success: false, message: "Failed to remove food item" });
  }
};

export { addFood, listFood, removeFood };
