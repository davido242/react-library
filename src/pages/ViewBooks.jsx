import React from "react";
import { Link } from "react-router-dom";
import { Tab, initTE } from "tw-elements";
import LibraryImg from "../assets/images/booklibrary.jpg";



const ViewBooks = () => {
  initTE({ Tab });

  return (
    <section className="text-[#000026] bg-slate-400">
      <div className="container mx-auto px-2 md:px-32">
        <div className="flex flex-col">
          <div className="flex justify-between border-b border-blue-300 py-4">
            <h3 className="text-lg font-bold">
              My Books
            </h3>
            <input type="search" placeholder="Search books..." className="px-4 py-2 outline-0 rounded-sm"/>
          </div>
          <Link to="/login" className="text-neutral-500 py-4">Book Shelves (3)</Link>
          <div className="flex">
            <ul
              class="mr-4 flex list-none flex-col flex-wrap pl-0"
              role="tablist"
              data-te-nav-ref>
              <li role="presentation" class="flex-grow text-center">
                <a
                  href="#tabs-home03"
                  class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                  data-te-toggle="pill"
                  data-te-target="#tabs-home03"
                  data-te-nav-active
                  role="tab"
                  aria-controls="tabs-home03"
                  aria-selected="true"
                  >Want to Read</a>
              </li>
              <li role="presentation" class="flex-grow text-center">
                <a
                  href="#tabs-profile03"
                  class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-transparent focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                  data-te-toggle="pill"
                  data-te-target="#tabs-profile03"
                  role="tab"
                  aria-controls="tabs-profile03"
                  aria-selected="false"
                  >Reading</a>
              </li>
              <li role="presentation" class="flex-grow text-center">
                <a
                  href="#tabs-messages03"
                  class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                  data-te-toggle="pill"
                  data-te-target="#tabs-messages03"
                  role="tab"
                  aria-controls="tabs-messages03"
                  aria-selected="false"
                  >Read</a
                >
              </li>            
            </ul>
            <div class="my-2">
              <div
                class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-home03"
                role="tabpanel"
                aria-labelledby="tabs-home-tab03"
                data-te-tab-active>
                Tab 1 content
                <div>
                  <img src={LibraryImg} alt="iconic" className="md:h-[100px]" />
                </div>
              </div>
              <div
                class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-profile03"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab03">
                Tab 2 content
              </div>
              <div
                class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-messages03"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab03">
                Tab 3 content
              </div>           
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ViewBooks;
