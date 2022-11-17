import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { Fancybox } from "../../../components/Fancybox/Fancybox"

export const Portfolio = () => {
  const portfolio = useSelector((state) => state.authReducer.user.portfolio)

  const handleAddPortfolio = () => {

  }
  const handleGetPortfolio = () => {

  }
  return (
    <div className="portfolio-gallery-sec">
      <h3>Portfolio</h3>
      <div className="portfolio-btn">
        <a href="#" title=""><i className="fa fa-plus-square"></i> Add Portfolio</a>
      </div>
      <div className="gallery_pf">
        <Fancybox options={{ infinite: false }}>
          <p>
            <button
              data-fancybox="gallery"
              data-src="https://lipsum.app/id/1/800x600"
              className="button button--secondary"
            >
              Image #1
            </button>

            <button
              data-fancybox="gallery"
              data-src="https://lipsum.app/id/2/800x600"
              className="button button--secondary"
            >
              Image #2
            </button>
          </p>
        </Fancybox>
        <div className="row">
          {portfolio && portfolio.length > 0 && portfolio.map((image) => (
            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
              <div className="gallery_pt">
                <img src={image} alt="" />
                <a href="#" title=""><img src="images/all-out.png" alt="" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}