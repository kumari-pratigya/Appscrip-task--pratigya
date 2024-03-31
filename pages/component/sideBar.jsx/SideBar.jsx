import React from "react";
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
      <div className=" sideBar accordion" id="accordionExample">
      {productDetails.length !== 0 &&
                productDetails.map((item, i) => (
                    <div className="accordion-item">
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
                  {/* <img
                    alt="subCategoryIcon"
                    width="20px"
                    height="20px"
                  
                  /> */}
                  <span className="ps-3">{item.heading}</span>
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
              {productDetails.length !== 0 &&
                productDetails.map((item, j) => (
                  <div key={j}>
                    <p>{item.heading}</p>
                    <p>{item.type}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
                 
                ))}
    
      </div>
    </>
  );
};

export default SideBar;
