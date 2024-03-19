import ProductInformationLayout from '../components/ProductInformationLayout';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import AddProductFormLayout from '../components/AddProductFormLayout';
import {
  useAddProductsMutation,
  useFetchProductsQuery,
} from '../../api/useProductsApi';

function ProductsPage() {
  const [open, setOpen] = useState(false);

  const { mutate } = useAddProductsMutation();

  const { isLoading, error, data } = useFetchProductsQuery();

  if (isLoading) return <h1 className="h1">Loading ...</h1>;

  if (error) return <h1 className="h1">Error ...</h1>;

  return (
    <>
      <div className="m-5">
        <div className='d-flex justify-content-end align-items-center'>
          <div className='addMore point-text' onClick={() => setOpen(true)}>
            <AddCircleIcon className='icon' />&nbsp;Add Product
          </div>
        </div>
        <h1 className="text-center">Products Information</h1>
        <ProductInformationLayout products={data.products} />
        <Dialog
          open={open} maxWidth="lg" fullWidth
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <div className="d-flex justify-content-between">
              <span style={{ color: "#012169" }}>
                Add New Products
              </span>
              <Box position="absolute" right={0}>
                <Button style={{ cursor: "pointer", color: "#012169" }} onClick={() => setOpen(false)}>
                  {<CloseIcon />}
                </Button>
              </Box></div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ color: "#012169" }} >
              <div className='scroll'>
                <AddProductFormLayout
                  handleSubmitFunc={mutate}
                  close={() => setOpen(false)}
                  productId={data.products[data.products.length-1].id}
                />
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default ProductsPage;
