import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="container d-flex align-items-center text-center text-light fw-boldh-100 mt-5">
			<h1>
				<p>STAR WARS</p>
				<p>INFO STAR WARS</p>
				<p>VEHICULOS, PLANETAS Y PERSONAJES</p>
			</h1>
		</div>

	)
};