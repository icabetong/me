import { useState } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { motion } from "framer-motion"

import Box from "../core/Box"
import { Route } from "./Route"
import NavigationLink from "./NavigationLink"
import data from "../../data/common"

const routes: Route[] = ["about", "skills", "works", "contact"]
const Navigation = () => {
  const [open, setOpen] = useState(false)
  const onHandleMenu = () => setOpen((prev) => !prev)

  const navigationContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2.8,
        staggerChildren: 0.6
      }
    }
  }

  const name = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  const list = (
    <motion.ul
      variants={navigationContainer}
      initial="hidden"
      animate="visible" 
      className="flex flex-col px-2 py-2 md:flex-row md:space-x-8 md:text-md md:font-medium">
      { routes.map((route) => <NavigationLink key={route} route={route}/>) }
    </motion.ul>
  )

  return (
    <nav className="font-inter relative z-30 border-gray-200 rounded h-fit">
      <Box>
        <div className="container flex flex-wrap justify-between items-center mx-auto px-4 py-4">
          <motion.a 
            href="#"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.4 }}
            className="flex items-center">
            <motion.span variants={name} className="font-semibold text-xl">{data.domain}</motion.span>
          </motion.a>
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.6 }}
            className="md:hidden">
            <motion.button 
              type="button"
              data-collapse-toggle="mobile-menu"  
              className="inline-flex items-center p-2 ml-3 text-sm bg-tran text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navajo-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9, x: "-2px", y: "2px" }}
              onClick={onHandleMenu}>
              <span className="sr-only">Open main menu</span>
              <MenuIcon className={`h-5 w-5 ${!open ? "block" : "hidden"}`}/>
              <XIcon className={`h-5 w-5 ${open ? "block" : "hidden"}`}/>
            </motion.button> 
          </motion.div>  
          <div className="w-full hidden md:block md:w-auto">
          {list}
          </div>
        </div>
        <motion.div
          animate={{ scale: open ? 1 : 0 }}
          className={`${open ? 'block' : 'hidden'} bg-content w-full md:hidden md:w-auto rounded`} id="nav-menu">
          {list}
        </motion.div>
      </Box>
    </nav>
  )
}

export default Navigation