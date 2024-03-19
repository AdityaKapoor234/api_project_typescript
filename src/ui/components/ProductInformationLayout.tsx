import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

type PropTypes = {
  products: unknown;
};

export default function ProductInformationLayout(props: PropTypes) {
  return (
    <div>
      {props?.products.map((product: object) => {
        return (
          <div className="productBox my-5 a-auto">
            <div className="row">
              <div className="col-4">
                <img src={product?.thumbnail} className="d-block w-100" alt="" />
              </div>
              <div className="col d-flex justify-content-center flex-column">
                <h2 className="h2">{product?.brand ? product?.brand : ""} {product?.title ? product?.title : "-"}</h2>
                <div className="text-capitalize">{`${product.category ? product.category : "-"}`}</div>
                <div>{`${product.description ? product.description : "-"}`}</div>
                <div>
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Rating
                      value={product.rating}
                      name="text-feedback"
                      readOnly
                      precision={0.5}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                  </Box>
                </div>
                <h3>{`₹ ${parseInt(product.price).toFixed(2).toString().replace(/\B(?=(?:(\d\d)+(\d)(?!\d))+(?!\d))/g, ',')}`}</h3>
              </div>
            </div>
            {/* <div id="carouselExampleIndicators" className="carousel slide">
							<div className="carousel-indicators">
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
								<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
							</div>
							<div className="carousel-inner">
								{
									product?.images.map((elem: string) => {
										return (
											<div className="carousel-item active">
												<img src={elem} className="d-block w-100" alt="" />
											</div>
										)
									})
								}
							</div>
							<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div> */}
          </div>
        );
      })}
    </div>
  );
}
