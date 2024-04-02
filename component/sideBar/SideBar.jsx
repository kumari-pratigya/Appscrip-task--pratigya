import React from "react";
import style from "./SideBar.module.css";
const SideBar = () => {
  const productDetails = [
    {
      heading: "Ideal for",
      type: "All",
    },
    {
      heading: "OCCASION FOR",
      type: "All",
    },
    {
      heading: "WORK",
      type: "All",
    },
    {
      heading: "FABRIC",
      type: "All",
    },
    {
      heading: "SEGMENT",
      type: "All",
    },
    {
      heading: "SUITABLE FOR",
      type: "All",
    },
    {
      heading: "RAW MATERIALS",
      type: "All",
    },
    {
      heading: "PATTERN",
      type: "All",
    },
  ];
 
  return (
    <>
      <div className="sideBar">
        <div className="accordion " id="accordionExample">
          {productDetails.length !== 0 &&
            productDetails.map((item, i) => (
              <div key={i} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded={true}
                    aria-controls="collapseOne"
                  >
                    <ul role="button" className="list-unstyled text-start">
                      <li>
                        <span className={`ps-3 ${style.heading}`}>
                          {item.heading}
                        </span>
                      </li>
                      <li>
                        <span className={`ps-3 ${style.subHeading}`}>
                          {item.type}
                        </span>
                      </li>
                    </ul>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  <ul className="list-unstyled">
                  
                        
                          <li >  <input type="checkbox"/> Men</li>
                          <li >  <input type="checkbox"/> Women</li>

                      </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
