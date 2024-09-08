import React, { Ref } from 'react'

interface HeaderAndNavProps {
    showModal: boolean;
    setShowModal: () => void;
    projectsOnScreen: boolean;
    aboutRef: Ref;
    
}

const HeaderAndNav = () => {
  return (
    <div className="flex flex-col ">
            <div
              className={cn(
                "lg:fixed  md:flex lg:flex-col  lg:top-[15%] justify-between ",
                showModal && "!opacity-0"
              )}
              style={{ transition: "opacity 0.4s ease-in-out" }}
            >
              <div
              id="header"
                className={cn(
                  "observer-slide relative flex flex-col items-center w-full",
                  showModal && "lg:hidden"
                )}
                style={{
                  transition:
                    "blur 1s ease-in, right 0.8s ease-in-out, opacity 0.8s ease-in-out",
                }}
              >
                <div
                  className={cn(
                    "flex flex-col  gap-x-12 pl-4"
                    // projectsOnScreen && "opacity-10"
                  )}
                >
                  <span
                  id="header"
                    className={cn(
                      "hover:!opacity-100",
                      projectsOnScreen && "opacity-10"
                    )}
                    style={{ transition: "opacity 0.8s ease-in-out" }}
                  >
                    <Header
                      showModal={showModal}
                      setShowModal={() => setShowModal(!showModal)}
                      className=""
                      
                      projectsOnScreen={projectsOnScreen}
                    />
                  </span>
                  <span
                    className={cn(
                      "hover:!opacity-100",
                      projectsOnScreen && "opacity-50"
                    )}
                    style={{ transition: "opacity 0.4s ease-in-out" }}
                  >
                    <Sidebar
                      aboutRef={aboutRef}
                      experienceRef={experienceRef}
                      projectsRef={projectsRef}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
  )
}

export default HeaderAndNav