import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import IndexLayout from "../components/layout/IndexLayout"

import getWorkData from "../static_queries/getWorkData"

export default function Work() {
  const data = getWorkData()

  function renderWorkList() {
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8`}>
        {data.map(exp => {
          const img = getImage(exp.node.companyLogo)
          return (
            <div
              className="border h-full border-trueGray-800 w-full rounded md:group-hover:bg-trueGray-400 md:group-hover:bg-opacity-10 md:group-hover:border-orange-500
                            	transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-103"
            >
              <div className="grid grid-cols-1 font-mono h-full p-4 md:p-8 md:pt-5">
                <div className="flex flex-row items-center h-full w-full">
                  <div className=" text-base font-mono lg:text-xl h-full w-full font-semibold text-lg md:text-xl font-semibold font-mono text-orange-500 md:group-hover:text-orange-400 col-span-full md:col-span-2">
                    {exp.node.position}
                    <br />
                    <div>
                      <span className="text-sm lg:text-base">
                        {exp.node.company}
                      </span>
                    </div>
                  </div>
                  {
                    <div className="flex flex-row justify-end items-center max-w-full">
                      <GatsbyImage image={img} alt={exp.node.company} />
                    </div>
                  }
                </div>
                <div className="mt-3">
                  <div className="text-sm text-white text-opacity-80 font-mono">
                    {exp.node.dates.start} - {exp.node.dates.end}
                  </div>
                </div>
                {/*                 <div className="mt-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: exp.node.roleDescription,
                    }}
                    className="text-sm lg:text-base text-white text-opacity-80 font-blogBody py-4"
                  />
                </div> */}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <IndexLayout ident="studies" idx="03" name="Studies">
      <ul
        className="mt-10 md:mt-15 lg:mt-20"
        data-sal="zoom-out"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        {renderWorkList()}
      </ul>
    </IndexLayout>
  )
}
