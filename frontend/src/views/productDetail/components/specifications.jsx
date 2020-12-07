import React from "react";

const Specifications = (props) => {
	const { url } = props;
	return (
		<section id={url ?? "specifications"} className="container py-5">
			<div className="row">
				<div className="col">
					<h4>Specifications</h4>
					{/* <hr /> */}
					<table className="table my-3">
						<tbody>
							<tr>
								<td>
									<strong>Spec</strong>
								</td>
								<td>Details</td>
							</tr>
							<tr>
								<td>
									<strong>Spec</strong>
								</td>
								<td>Details</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default Specifications;
