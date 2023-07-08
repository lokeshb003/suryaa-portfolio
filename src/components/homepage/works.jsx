import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Skills"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
								alt="python"
								className="work-image"
							/>
							<div className="work-title">Python Programming</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration"></div>
						</div>

						<div className="work">
							<img
								src="https://banner2.cleanpng.com/20180406/stw/kisspng-java-logo-programming-language-java-plum-5ac7bef1a28845.9064814515230399856657.jpg"
								alt="java"
								className="work-image"
							/>
							<div className="work-title">Java Programming</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration"></div>
						</div>
						<div className="work">
							<img
								src="https://banner2.cleanpng.com/20171217/033/letter-c-png-5a36954d474e54.1991877715135266052921.jpg"
								alt="c"
								className="work-image"
							/>
							<div className="work-title">C Programming</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration"></div>
						</div>
						<div className="work">
							<img
								src="https://seeklogo.com/images/P/power-bi-icon-logo-E1B451ED39-seeklogo.com.png"
								alt="powerbi"
								className="work-image"
							/>
							<div className="work-title">Microsoft PowerBI</div>
							<div className="work-subtitle">
								
							</div>
							<div className="work-duration"></div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
