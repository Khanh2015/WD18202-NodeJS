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
    await axios.delete("http://localhost:3000/products/" + id);
    const { data } = await axios.get("http://localhost:3000/products/");
    if (data && data.length) {
      return res.status(200).json({
        message: "Delete product successfully",
        datas: data,
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

// export const createProduct = async (req, res) => {
//   try {
//     const product = req.body;
//     const { data } = await axios.post(
//       "http://localhost:3000/products",
//       product
//     );
//     if (data) {
//       return res.status(200).json({
//         message: "Create product successfully",
//         datas: data,
//       });
//     }
//     return res.status(404).json({
//       message: "Error create product",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Server not response",
//     });
//   }
// };

export const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const { data } = await axios.post(
      "http://localhost:3000/products",
      product
    );
    if (!data) {
      throw new Error("Error create product");
    }
    return res.status(200).json({
      message: "Create product successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server not response",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const newProduct = req.body;
    const { data } = await axios.put(
      `http://localhost:3000/products/${id}`,
      newProduct
    );
    if (data) {
      return res.status(200).json({
        message: "Update product successfully",
        data,
      });
    }
    return res.status(404).json({
      message: "Error update product",
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
