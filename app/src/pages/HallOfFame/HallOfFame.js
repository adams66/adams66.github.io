import Key from "../../key/key.json";
import  * as helper  from "../../helpers/helpers";
import Foundation from "../../layout/Foundation";
import { useEffect } from "react";
import "./hallOfFame.css"




function HallOfFame(){

    useEffect(() => {
		helper.windowReset();	
	}, []);




return(

    <Foundation>
    <div className="row m-3 m-md-4 m-lg-3 hof">


        {Key.champions.map((champions) =>{
            return(
                       <div className="col-12 col-md-6 col-lg-6 col-xl-3 p-0">
                       <div style={{backgroundColor: "#101116"}} className="card p-0 rounded m-3">
                       <svg
											xmlns="http://www.w3.org/2000/svg"
							
											fill="#000000"
											height="800px"
											width="800px"
											version="1.1"
											id="Capa_1"
											viewBox="0 0 332.793 332.793"
							
										>
											<g>
												<g>
													<g>
														<path d="M68.367,120.592c-0.807,0-1.627-0.131-2.434-0.408c-3.918-1.344-6.006-5.609-4.66-9.527     c15.779-45.998,59.693-76.902,109.275-76.902c16.471,0.002,32.373,3.333,47.268,9.901c14.518,6.399,27.328,15.52,38.072,27.106     c2.816,3.037,2.639,7.782-0.398,10.599c-3.037,2.817-7.783,2.638-10.6-0.399c-9.346-10.077-20.49-18.011-33.125-23.58     c-12.979-5.723-26.846-8.625-41.217-8.627c-43.174,0-81.387,26.833-95.088,66.77C74.393,118.635,71.483,120.592,68.367,120.592z" />
													</g>
													<g>
														<path d="M200.717,238.184c-16.803,0-30.475-13.671-30.475-30.474c0-16.803,13.672-30.474,30.475-30.474     s30.473,13.671,30.473,30.474C231.19,224.513,217.52,238.184,200.717,238.184z M200.717,192.237     c-8.533,0-15.475,6.941-15.475,15.474c0,8.532,6.941,15.474,15.475,15.474c8.531,0,15.473-6.941,15.473-15.474     C216.19,199.178,209.248,192.237,200.717,192.237z" />
													</g>
													<path d="M332.793,159.801c0-85.659-71.191-155.348-158.697-155.348c-87.506,0-158.699,69.688-158.699,155.348    c0,3.477,2.391,6.5,5.775,7.299c0.543,0.128,3.475,0.767,7.984,0.767c7.309,0,18.354-1.678,29.467-9.67    c4.945-3.556,10.197-5.739,15.385-6.47l2.146,56.413L5.741,225.133c-3.721,0.898-6.17,4.457-5.678,8.254l11.451,88.424    c0.467,3.6,3.443,6.349,7.066,6.528c0.178,0.009,34.168,0,54.771-18.577c12.451-11.228,19.074-26.945,19.889-46.491    c0.008-0.199-0.207-6.06-0.207-6.06l22.082-2.219c4.092,7.68,9.713,15.217,17.434,22.467    c11.592,10.887,28.66,17.131,46.828,17.131c0.002,0,0.002,0,0.002,0c17.496,0,33.805-5.548,45.924-15.62    c13.4-11.141,27.758-22.12,43.318-23.987l27.066,11.187c0.93,0.385,1.902,0.569,2.861,0.569c2.445,0,4.813-1.199,6.24-3.336    l24.988-37.425c0.92-1.376,1.357-3.017,1.246-4.668l-1.896-28.256C331.553,182.172,332.793,170.993,332.793,159.801z     M17.307,249.745l-1.504-11.608l60.934-14.706l0.771,20.266L17.307,249.745z M63.313,298.617    c-11.986,11.223-28.857,13.88-37.793,14.552l-6.285-48.541l58.846-5.913C78.08,258.714,78.776,284.138,63.313,298.617z     M89.106,154.055c2.678,1.318,5.148,3.113,7.307,5.346c6.008,6.207,9.133,15.159,8.801,25.207c-0.051,1.504-0.105,3.018-0.16,4.54    c-0.145,3.967-0.289,8.01-0.354,12.103l-13.67,3.3L89.106,154.055z M92.461,242.192l-0.85-22.352l13.385-3.23    c0.508,7.93,1.703,15.948,4.135,23.907L92.461,242.192z M215.715,267.435c-9.295,7.725-22.539,12.155-36.336,12.155    c-14.395,0-27.721-4.763-36.563-13.065c-24.725-23.216-23.732-50.473-22.773-76.831c0.055-1.54,0.111-3.07,0.162-4.592    c0.467-14.145-4.154-26.977-13.012-36.132c-7.824-8.086-18.264-12.539-29.396-12.539c-9.551,0-19.209,3.316-27.932,9.588    c-7.174,5.159-14.236,6.603-19.293,6.817C34.299,78.668,97.25,19.454,174.096,19.454c79.236,0,143.697,62.96,143.697,140.348    c0,9.774-1.039,19.538-3.09,29.054l-48.506,51.314C246.844,242.737,230.041,255.525,215.715,267.435z M295.731,249.956    l-13.049-5.393l32.557-34.438l0.648,9.645L295.731,249.956z" />
												</g>
											</g>
										</svg>
                           <div className="card-body">
                               <h5 className="card-title text-light">{champions.name}</h5>
                               <h5 className="card-title text-light">{champions.season}</h5>
                               <p className="card-text text-light">
                                   Some quick example text to build on the card title and make up the bulk of the card's
                                   content.
                               </p>

                           </div>
                       </div>
                   </div>
            )


        }




        )}


        

 


    </div>

</Foundation>

);
}



export default HallOfFame;