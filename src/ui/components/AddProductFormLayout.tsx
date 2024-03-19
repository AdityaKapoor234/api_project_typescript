import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export type ProductInputTypes = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: unknown;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

export type AddProductFormLayoutPropTypes = {
  handleSubmitFunc: (arg: ProductInputTypes) => void;
  close: (arg: ProductInputTypes) => void;
};

function AddProductFormLayout({
  handleSubmitFunc,
  close,
	productId = undefined,
}: AddProductFormLayoutPropTypes) {
  const {
    formState: { errors },
  } = useForm<ProductInputTypes>();
  const [newProduct, setNewProduct] = useState({
    brand: '',
    category: '',
    description: '',
    discountPercentage: null,
    id: null,
    images: ['https://cdn.dummyjson.com/product-images/1/1.jpg', 'https://cdn.dummyjson.com/product-images/1/2.jpg', 'https://cdn.dummyjson.com/product-images/1/3.jpg', 'https://cdn.dummyjson.com/product-images/1/4.jpg', 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'],
    price: null,
    rating: null,
    stock: null,
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    title: '',
  });
  const [validateError, setValidateError] = useState<unknown>();

  const onSubmit: SubmitHandler<ProductInputTypes> = () => {
    const data = {
      brand: newProduct?.brand?.trim(),
      category: newProduct?.category?.trim(),
      description: newProduct?.brand?.trim(),
      discountPercentage: newProduct?.description?.trim(),
      id: productId + 1,
      images: ['https://cdn.dummyjson.com/product-images/1/1.jpg', 'https://cdn.dummyjson.com/product-images/1/2.jpg', 'https://cdn.dummyjson.com/product-images/1/3.jpg', 'https://cdn.dummyjson.com/product-images/1/4.jpg', 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'],
      price: newProduct?.price?.trim(),
      rating: newProduct?.rating?.trim(),
      stock: newProduct?.stock?.trim(),
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      title: newProduct?.title?.trim(),
    }
    if (validateData(data)) {
      handleSubmitFunc(data);
      close();
    }
  };

  function validateData(input: unknown) {
    let isValid = true;
    const errors = {
      brand: '',
      title: '',
      category: '',
      description: '',
      discountPercentage: null,
      rating: null,
      stock: null,
      price: null,
    };

    if (!input?.brand || input?.brand.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.brand = "Please enter brand name";
    }

    if (!input?.title || input?.title.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.title = "Please enter title";
    }

    if (!input?.category || input?.category === "-" || input?.category.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.category = "Please enter category";
    }

    if (!input?.description && input?.description.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.description = "Please enter description";
    }
    
    if (!input?.discountPercentage || input?.discountPercentage.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.discountPercentage = "Please enter discount (%)";
    }

    if (input?.discountPercentage > 100) {
      isValid = false;
      errors.discountPercentage = "Please enter valid discount (%) (Out of 100)";
    }

    if (!input?.rating || input?.rating.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.rating = "Please enter rating";
    }

    if (input?.rating > 5) {
      isValid = false;
      errors.rating = "Please enter valid rating (Out of 5)";
    }

    if (!input?.stock || input?.stock.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.stock = "Please enter number of stocks";
    }

    if (!input?.price || input?.price.replace(/\s/g, "").length <= 0) {
      isValid = false;
      errors.price = "Please enter price";
    }

    setValidateError(errors);

    return isValid;
  }

  return (
    <div>
      <div
        className="d-flex flex-column justify-content-end h-100 scroll"
        style={{ marginBottom: "100px" }}
      >
        <div className="mx-3">
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Brand
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="input">
                <input
                  style={{ paddingLeft: "0.9rem" }}
                  type="text"
                  value={newProduct?.brand}
                  onChange={(event) => setNewProduct({ ...newProduct, brand: event.target.value })}
                  className="input-tag"
                />
              </div>
              <small className="text-danger">{validateError?.brand}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Title
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="input">
                <input
                  style={{ paddingLeft: "0.9rem" }}
                  type="text"
                  value={newProduct?.title}
                  onChange={(event) => setNewProduct({ ...newProduct, title: event.target.value })}
                  className="input-tag"
                />
              </div>
              <small className="text-danger">{validateError?.title}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Category
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div className="">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={newProduct?.category}
                    onChange={(event) => setNewProduct({ ...newProduct, category: event.target.value })}
                    className="input"
                    style={{ height: "40px" }}
                  >
                    <MenuItem value={"-"} disabled>Enter your relation</MenuItem>
                    <MenuItem value={"laptop"}>Laptop</MenuItem>
                    <MenuItem value={"smartphone"}>Smartphone</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <small className="text-danger">{validateError?.category}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Description
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <TextField
                  sm-size="small"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    sx: {
                      borderRadius: "4px",
                      height: 108,
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                    },
                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "1px solid rgba(0, 0, 0, 0.23)",
                    },
                  }}
                  multiline
                  rows={4}
                  value={newProduct?.description}
                  onChange={(event) => setNewProduct({ ...newProduct, description: event.target.value })}
                />
              </div>
              <small className="text-danger">{validateError?.description}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Discount (%)
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <TextField
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    onKeyPress: (e) => {
                      if (isNaN(Number(e.key))) {
                        e.preventDefault();
                      }
                    },
                  }}
                  InputProps={{
                    style: {
                      paddingRight: 2,
                    },
                    sx: {
                      borderRadius: "4px",
                      height: "40px",
                      "&.Mui-disabled": {
                        bgcolor: "#e0e0e0",
                      },
                    },
                  }}
                  value={newProduct?.discountPercentage}
                  onChange={(event) => setNewProduct({ ...newProduct, discountPercentage: event.target.value })}
                  required={true}
                />
              </div>
              <small className="text-danger">{validateError?.discountPercentage}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Rating
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <TextField
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    onKeyPress: (e) => {
                      if (isNaN(Number(e.key))) {
                        e.preventDefault();
                      }
                    },
                  }}
                  InputProps={{
                    style: {
                      paddingRight: 2,
                    },
                    sx: {
                      borderRadius: "4px",
                      height: "40px",
                      "&.Mui-disabled": {
                        bgcolor: "#e0e0e0",
                      },
                    },
                  }}
                  value={newProduct?.rating}
                  onChange={(event) => setNewProduct({ ...newProduct, rating: event.target.value })}
                  required={true}
                />
              </div>
              <small className="text-danger">{validateError?.rating}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Stock
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <TextField
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    onKeyPress: (e) => {
                      if (isNaN(Number(e.key))) {
                        e.preventDefault();
                      }
                    },
                  }}
                  InputProps={{
                    style: {
                      paddingRight: 2,
                    },
                    sx: {
                      borderRadius: "4px",
                      height: "40px",
                      "&.Mui-disabled": {
                        bgcolor: "#e0e0e0",
                      },
                    },
                  }}
                  value={newProduct?.stock}
                  onChange={(event) => setNewProduct({ ...newProduct, stock: event.target.value })}
                  required={true}
                />
              </div>
              <small className="text-danger">{validateError?.stock}</small>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3 d-flex align-items-center">
              <div className="input-label mb-2">
                Price
                <span className="text-danger">*</span>
              </div>
            </div>
            <div className="col-md-9">
              <div>
                <TextField
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    onKeyPress: (e) => {
                      if (isNaN(Number(e.key))) {
                        e.preventDefault();
                      }
                    },
                  }}
                  InputProps={{
                    style: {
                      paddingRight: 2,
                    },
                    sx: {
                      borderRadius: "4px",
                      height: "40px",
                      "&.Mui-disabled": {
                        bgcolor: "#e0e0e0",
                      },
                    },
                  }}
                  value={newProduct?.price}
                  onChange={(event) => setNewProduct({ ...newProduct, price: event.target.value })}
                  required={true}
                />
              </div>
              <small className="text-danger">{validateError?.price}</small>
            </div>
          </div>

        </div>

        <div className="d-flex justify-content-end px-2">
          <div className="d-flex justify-content-center align-items-center">
            <div
              aria-disabled={true}
              role="button"
              onClick={() => onSubmit()}
              className="next bottom-btn mt-3"
              style={{ marginRight: "1.5rem" }}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductFormLayout;
