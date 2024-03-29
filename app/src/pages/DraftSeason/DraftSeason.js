import * as helper from '../../helpers/helpers';
import Key from '../../key/key.json';
import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import "./draftSeason.css";
import Foundation from '../../layout/Foundation';
import Circle from './componets/Circle';

function DraftSeason(props) {

    const [width, setWidth] = useState(window.innerWidth);
    const [draft, setDraft] = useState([]);
    const [round, setRound] = useState(1);
    const [theme, setTheme] = useState();

  

        

    const fetchData = (year, url) => {

            

            return fetch("https://adams66.github.io/api/draft/draft-" + year + ".json").then((response) => response.json()).then((data) => {  
                setDraft(data)
            });
    }


    useEffect((year, url) => {
        var url = window.location.href.split("/");
        var year = url[5];
        fetchData(year, url);

    }, [])

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);

    }

    function page(draft, round,event) {
        if (event == "Next" && round != draft.rounds ) {
            setRound(round + 1);
        }
         else if (event =="Previous" && round != 1) {
            setRound(round - 1);
        }
        else{
            
        }
    }

    function componentWillMount() {
        window.addEventListener('resize', handleWindowSizeChange);
    }

    componentWillMount();


    if (width >= 700) {

        return (

            <Foundation>

                <table className="table m-3 ">
                    <thead style={{background: "rgb(16, 17, 22)"}} >
                        <tr className="text-light">
                            <th class="text-center d-none d-md-table-cell"  scope="col">Round</th>
                            <th class="text-center d-none d-md-table-cell"  scope="col">Round Number</th>
                            <th class="text-center"                         scope="col">Overall</th>
                            <th class="text-center"                         scope="col">Player Id</th>
                            <th class="text-center"                         scope="col">Owner</th>
                            <th class="text-center"                         scope="col">Position</th>
                            <th class="text-center"                         scope="col">NFL</th>
                            <th class="text-center"                         scope="col">College</th>
                        </tr>
                    </thead>
                    <tbody style={{background: "rgb(16, 17, 22)"}} className="text-light">
                        {
                        draft.draft && draft.draft.length > 0 && draft.draft.map((userObj, index) => (userObj.Round === round ? <tr className={theme}>
                            <th className="align-middle d-none d-md-table-cell" scope="row">
                                <div className="text-center ">{userObj.Round}</div>
                            </th>
                            <td className="align-middle d-none d-md-table-cell">
                                <div  className="text-center align-middle">
                                    {
                                    userObj["Round Number"]
                                }</div>
                            </td>
                            <td 
                                className="align-middle ">
                                <div className="text-center">
                                    {
                                    userObj.Overall
                                }</div>
                            </td>
                            <td 
                                className="align-middle">
                                <div className="text-center">
                                    {
                                    userObj.Player_id
                                }</div>
                            </td>
                            <td 
                                className="align-middle">
                                <div className="text-center">
                                    {
                                    userObj.Owner
                                }</div>
                            </td>
                            <td 
                                className="align-middle">
                                <div className="text-center"><Circle position={userObj}/></div>
                            </td>
                            <td 
                                className="align-middle">
                                <div  className="text-center">
                                  <svg style={{width: "100px"}} xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" fill-rule="evenodd" viewBox="0 0 560 400"><path d="m373.122 93.87c-8.336 6.252-25.009 14.588-45.849 9.378-36.819-9.031-47.239-40.639-47.239-40.639s-10.49 31.573-47.238 40.639c-21.153 5.21-37.513-3.195-46.197-9.343h-6.599v170.198c0 4.515 1.042 12.852 8.023 21.535 8.649 10.42 23.237 17.124 43.418 20.041 16.325 2.327 28.135 7.398 36.471 15.492 6.252 5.94 12.157 16.221 12.157 16.221s6.079-10.49 12.018-16.221c8.405-8.093 20.32-13.13 36.471-15.492 20.215-2.921 34.734-9.725 43.418-20.181 6.982-8.475 8.024-16.985 8.024-21.257v-170.198h-6.634" fill="#fff"/><path d="m373.817 100.469s-20.042 15.595-48.281 8.544c-32.894-8.232-45.849-32.858-45.849-32.858s-12.782 24.661-45.849 32.858c-27.787 6.947-47.933-8.684-47.933-8.684v163.599c.003 5.557 2.327 29.177 46.544 35.429 17.402 2.518 30.393 8.093 39.597 17.089 3.362 3.223 5.905 6.495 7.85 9.517 1.956-3.011 4.515-6.287 7.85-9.517 9.343-8.996 22.334-14.588 39.597-17.089 44.112-6.356 46.196-29.976 46.544-35.429v-163.599" fill="#013369"/><path d="m280.035 309.674s12.782-15.769 45.849-20.875c38.208-5.87 36.818-23.724 36.818-24.627v-85.794h-165.683v85.794c0 .903-1.125 18.757 36.819 24.627 33.206 5.14 45.849 20.875 45.849 20.875" fill="#fff"/><path d="m241.132 241.143-.006-40.639-5.106-2.866v-10.559h23.307v10.559l-4.863 2.866v83.015l-12.435-3.716-17.992-53.144-.003 35.082 5.731 4.377v10.803l-24.974-6.357v-9.204l5.731-2.237v-58.701l-5.87-2.9v-10.559h18.895l17.645 54.185m43.011 37.161 5.002 5.974v10.559l-24.766-9.239v-8.962l5.453-2.237v-73.984l-5.418-2.748v-10.698h43.07v21.501h-9.448l-2.862-8.822h-10.941v24.87h8.197l3.23-4.724h6.6v22.126h-6.6l-3.109-4.481h-8.336v40.987m27.368 3.698v-10.559l6.148-5.037v-65.995l-5.245-2.748v-10.698h24.766v10.698l-4.863 2.748v62.174l10.664-2.879 2.042-16.256h10.177v27.162l-43.765 11.671" fill="#d50a0a"/><path d="m201.361 160.907-7.503-5.627h9.17l3.025-8.684 3.025 8.684h9.17l-7.503 5.662 2.758 8.822-7.468-5.245-7.468 5.245 2.758-8.822m32.513-.035-7.503-5.627h9.17l3.025-8.684 3.025 8.684h9.17l-7.503 5.662 2.758 8.822-7.468-5.245-7.468 5.245 2.758-8.822m-32.441-29.212-7.503-5.627h9.17l3.025-8.684 3.025 8.684h9.17l-7.503 5.662 2.758 8.822-7.468-5.245-7.468 5.245 2.758-8.822m32.513-.035-7.503-5.627h9.17l3.025-8.684 3.025 8.684h9.17l-7.503 5.662 2.758 8.822-7.468-5.245-7.468 5.245 2.758-8.822m127.511 37.825-7.468-5.245-7.468 5.245 2.758-8.822-7.503-5.662h9.17l3.025-8.684 3.025 8.684h9.17l-7.503 5.662 2.761 8.822m-32.617 0-7.468-5.245-7.468 5.245 2.758-8.822-7.503-5.662h9.17l3.026-8.684 3.029 8.684h9.17l-7.503 5.662 2.761 8.822m32.678-29.176-7.468-5.245-7.468 5.245 2.758-8.822-7.503-5.662h9.17l3.025-8.684 3.025 8.684h9.17l-7.503 5.662 2.761 8.822m-32.617 0-7.468-5.245-7.468 5.245 2.758-8.822-7.503-5.662h9.17l3.026-8.684 3.029 8.684h9.17l-7.503 5.662 2.761 8.822m-41.653-15.284c-3.338-2.751-7.086-4.515-11.045-5.384.962-.91 1.948-1.692 2.813-2.414 4.967 1.195 8.302 3.421 10.594 5.314-.813.833-1.601 1.646-2.348 2.476l-.014.007zm-4.828 5.801c-3.182-2.671-7.051-4.654-11.428-5.557.67-.865 1.455-1.786 2.209-2.64 3.349.594 7.642 2.358 11.393 5.453-.764.917-1.48 1.848-2.153 2.733l-.021.01zm-4.342 6.079c-3.432-2.859-7.433-4.62-11.358-5.349 0 0 1.205-1.966 1.889-2.984 4.794.952 8.684 3.195 11.428 5.488-.701 1-1.365 1.959-1.959 2.841v.003zm22.681-29.038s-3.89 2.025-9.309 7.364c1.223.691 2.598 1.657 3.386 2.313-.82.726-1.657 1.511-2.435 2.247-3.543-2.907-7.19-4.377-10.038-5.071.945-.677 1.948-1.344 2.939-1.99 1.528.389 3.008.99 3.008.99 6.113-4.655 11.428-6.669 11.428-6.669s-.615-.301-2.251-.279c-24.071.311-46.197 18.27-42.029 48.975.448 3.261 1.716 9.204 3.328 11.81.535-5.106 2.459-16.43 8.162-28.586-1.983-.712-3.612-1.004-3.612-1.004.583-1.223 1.393-2.782 1.393-2.782 4.238.796 7.954 2.563 11.184 5.141-.774 1.254-1.299 2.07-1.671 2.716-1.132-.893-2.278-1.66-3.543-2.362-6.426 11.219-9.378 21.813-10.594 27.336.067.342.764.517 1.327.444 26.363-3.414 38.555-16.881 42.376-31.434 2.47-9.552 1.661-19.556-1.646-27.718-.232-.573-.684-1.525-1.452-1.455" fill="#fff"/></svg>
                                </div>
                            </td>


                            <td 
                                className="align-middle">
                                <div className="text-center">
                                    {
                                    userObj.College
                                }</div>
                            </td>
                        </tr> : null))
                    } </tbody>
                </table>
                <nav aria-label="Page navigation example ">
                    <ul className="pagination d-flex justify-content-center">
                        <li className="page-item m-1">
                            <a  onClick={(event) => page(draft, round,"Previous")}  style={round == 1 ? {background:"red"} : {background:helper.themeColor(Key,'color')}} className= {theme + " pageChanger btn  text-light"}
                                ><svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                              </svg></a>
                        </li>
                        <li  className="page-item m-1">
                            <a  onClick={(event) => page(draft, round,"Next")}  style={round == draft.rounds ? {background:"red"} : {background:helper.themeColor(Key,'color')}} className={theme + " pageChanger btn text-light"}
                                ><svg id="Next" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                              </svg></a>
                        </li>


                    </ul>
                </nav>
            </Foundation>


        );
    } else {
      

        return (


            <Foundation>
                    {
                    
                    draft.draft && draft.draft.length > 0 && draft.draft.map((userObj, index) => (
                        <div style={{borderWidth: "2px", borderColor: "grey", borderStyle: "solid"}} className="row pt-2 m-2 rounded" >
                            <div className="col-9 d-flex flex-column ">
                            <div className='text-light'>Round: {userObj.Round}</div>
                            <div className='text-light'>Overall: {userObj.Overall}</div>
                              <h6 className='text-light'>{userObj.Player_id}</h6>
                              <h6 className="text-light">{userObj.Owner}</h6>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-end">
                                <Circle position={userObj}></Circle>
                                </div>

                          </div>

                    ))
                } 
            </Foundation>

        )
    }

}

export default DraftSeason;
