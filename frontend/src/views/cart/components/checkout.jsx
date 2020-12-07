import React from "react";
import { Link } from "react-router-dom";

const CheckOut = (props) => {
	return (
		<div className="container mt-3">
			<article className="row">
				<section className="col">
					<h3>Checkout</h3>

					{/* personal information */}
					<hr />
					<div>
						<span className="circle">1</span>
						<p className="d-inline pl-2">Personal</p>
					</div>

					<div className="row mt-4">
						<div className="col-md-5 col">
							<div>
								<label htmlFor="name" className="d-form-label">
									Your name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="d-form-control w-100"
								/>
							</div>
							<div className="my-3">
								<label htmlFor="location" className="d-form-label">
									Location (district, town etc)
								</label>
								<input
									type="text"
									name="location"
									id="location"
									className="d-form-control w-100"
								/>
							</div>
							<div>
								<label htmlFor="phone" className="d-form-label">
									Phone number
								</label>
								<input
									type="tel"
									name="phone"
									maxLength={15}
									id="phone"
									className="d-form-control w-100"
								/>
							</div>
						</div>
					</div>

					{/* payment method */}
					<hr />
					<div>
						<span className="circle">2</span>
						<p className="d-inline pl-2">Payment Method</p>
					</div>

					<div className="row">
						<div className="col-md-5 col">
							<div className="my-3">
								<label htmlFor="payment-method" className="d-form-label">
									select preferred option
								</label>
								<select
									name="paymentmethod"
									id="payment-method"
									className="d-form-control w-100">
									<option value="1">Cash-on-delivery</option>
									<option value="2">Cards</option>
									<option value="3">Installment</option>
								</select>
							</div>
						</div>
					</div>

					{/* Delivery */}
					<hr />
					<div>
						<span className="circle">3</span>
						<p className="d-inline pl-2">Delivery</p>
					</div>

					<div className="row">
						<div className="col-md-5 col">
							<div className="my-3">
								<label htmlFor="delivery-method" className="d-form-label">
									select preferred option
								</label>
								<select
									name="deliverymethod"
									id="delivery-method"
									className="d-form-control w-100">
									<option value="1">I will pick up item myself</option>
									<option value="2">Deliver it to me</option>
								</select>
							</div>
						</div>
					</div>

					<button className="btn-primary-filled mt-3 px-4">Place Order</button>
					<Link className="ml-4">
						go back
						<ion-icon name="arrow-back-outline"></ion-icon>
					</Link>
				</section>
			</article>
		</div>
	);
};

export default CheckOut;
