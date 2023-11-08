import { products } from "../models/Product";
import axios from "axios";

export const getAllProduct = async (req, res) => {
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    if (data && data.length) {
      return res.status(200).json({
        message: "Get product list successfully",
        datas: data,
      });
    }
    return res.status(404).json({
      message: "Product list not found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server not response",
    });
  }
};

export const gedtDetailProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios.get("http://localhost:3000/products/" + id);
    if (data) {
      return res.status(200).json({
        message: "Get product successfully",
        datas: data,
      });
    }
    return res.status(404).json({
      message: "Product not found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server not response",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios.get("http://localhost:3000/products");
    const newProducts = data.filter((item) => item.id !== +id);
    if (newProducts && newProducts.length) {
      return res.status(200).json({
        message: "Delete product successfully",
        datas: newProducts,
      });
    }
    return res.status(404).json({
      message: "Delete product id not found",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server not response",
    });
  }
};

// export const getProductDetail = (req, res) => {
//   const { params, query, body } = req;
//   console.log("params: ", params);
//   console.log("query: ", query);
//   console.log("body: ", body);
//   res.send("<h1>Add product page</h1>");
// };
