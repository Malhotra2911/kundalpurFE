import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homee from '../../../../assets/homee.jpeg';
import Rating from '@mui/material/Rating';
import { backendUrl } from '../../../../config/config';
import './RoomCard.css';
function RoomCard({ data }) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(null > 2);

  return (
    <>
      <div className="room_card_main_div">
        <img
          className="room_card_main_divimg"
          src={`${backendUrl}uploads/images/${data?.image1}`}
          alt="dd"
        />
        <div className="main_room_div_deell">
          <p>{data?.name}</p>
          <p className="main_text_deltails">
            <span className="titleText">Category </span> &nbsp;: &nbsp;
            {data?.categoryName}
          </p>
          <p className="main_text_deltails">
            <span className="titleText">Facility </span> &nbsp;: &nbsp;
            {data?.facilityName}
          </p>

          <p className="main_text_deltails">
            <span className="titleText">Rate</span> &nbsp;: &nbsp;
            {data?.Rate}
          </p>

          <div className="dharamshal_arc_main_name_div13">
            <img
              className="dharamshal_arc_main_name_div13img"
              src={homee}
              alt="dd"
            />
            <p>Kundalpur</p>
          </div>
          <div>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <button
          // onClick={() =>
          //   navigate('/room/booking', {
          //     state: {
          //       roomdata: data,
          //       checkindata: isData,
          //     },
          //   })
          // }
          >
            Submit Rating
          </button>
        </div>
      </div>
    </>
  );
}

export default RoomCard;
