import React from "react"
import list from "./list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./cards";

// it is the double directory impoting type
function Freebook(){
    // here the imporatnat point is filtering the data from json AS on the list .json list working here as array
    // filter method in javascript to filter the elemnts from the array by unoque property
    const filterdata = list.filter((data) => data.category === "Free");
//    console.log(filterdata)
    // very important for getting the data
    // very important for getting the data
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            // here breakment means in how many wdth of pixesl how many cards should be displayed 
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
         <>
    <div className =" max-w-screen-2xl container mx-auto  md:px-20 px-4">
        <div>
          <h1 className="font-bold">Freebook offered courses</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                 
        </div>
           <div> 
            {/* using props to the pass the data from the parent component to child componenet  as data parsed to freebook.jsx we are gettig data from that component*/}
                       <Slider {...settings}>
                            {filterdata.map((item)=>(<Cards item = {item} key={item.id}/>))}
                       </Slider>
                 </div>
    </div>
        </>
   ); 
}
export default Freebook