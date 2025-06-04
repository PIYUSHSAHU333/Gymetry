import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, ScanLine, ChevronDown, Camera, LogOut } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(
    "https://i.pinimg.com/736x/30/f5/e3/30f5e3f34c157586018738c0f18a9597.jpg"
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "User"
  );
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || "user@example.com"
  );
  const fileInputRef = useRef(null);
  const dropdownRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  useEffect(() => {
    const handleStorageChange = () => {
      const savedPicture = localStorage.getItem("profilePicture");
      if (savedPicture) {
        setProfileImage(savedPicture);
      }
      setUserName(localStorage.getItem("userName") || "User");
      setUserEmail(localStorage.getItem("userEmail") || "user@example.com");
    };

    const handleProfileUpdate = (e) => {
      setProfileImage(e.detail.picture);
    };

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };

    handleStorageChange();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("profilePictureUpdate", handleProfileUpdate);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("profilePictureUpdate", handleProfileUpdate);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      localStorage.setItem("profilePicture", imageUrl);
      //triggering the event to update the profile picture
      window.dispatchEvent(
        new CustomEvent("profilePictureUpdate", {
          detail: { picture: imageUrl },
        })
      );
    } catch (error) {
      console.error("Error uploading profile picture:", error);
    }
  };
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const navlinks = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/exercises",
      label: "Exercises",
    },
    {
      to: "/my-plans",
      label: "My Plans",
    },
    {
      to: "/diet-plans",
      label: "Diet Plans",
    },
    {
      to: "/nearby-gyms",
      label: "Find Gyms",
    },
  ];

  return (
    <nav
      className={`top-0  mt-3 border-amber-50 rounded-full w-8/10 mx-auto  left-0 right-0 z-50 py-3 px-1 transition-all duration-300 `}
    >
      <div className="flex items-center mx-auto justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 7 }}
            transition={{ type: "spring", damping: "10", stiffness: "700" }}
            className="group-hover:bg-gradient-to-r group-hover:from-[#00F0FF] group-hover:to-[#E4FF4F]  group-hover:bg-clip-text"
          >
            <Dumbbell className="text-[#E4FF4F] hover:shadow-white w-10 h-10 " />
          </motion.div>
          <h1 className="text-2xl font-bold text-transparent w-fit h-fit bg-clip-text bg-gradient-to-r from-[#E4FF4F] to-[#00F0FF] group-hover:bg-gradient-to-r group-hover:from-[#00F0FF] group-hover:to-[#E4FF4F]">
            Gymetry
          </h1>
        </Link>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5 font-medium text-base relative text-white rounded-full bg-[rgba(228,255,79,0.2)] py-2 px-1">
            {navlinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full transition-all  px-3 py-2 ${
                    isActive
                      ? "bg-[rgba(255,255,255,0.3)] text-[#E4FF4F]"
                      : "hover:text-[#E4FF4F] hover:bg-[rgba(228,255,79,0.2)] transition-colors"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <NavLink
            to="/food-analysis"
            title="analyze your food"
            className={({ isActive }) =>
              `text-white w-8 h-8 hover:text-[#E4FF4F] hover:bg-[rgba(228,255,79,0.2)] rounded-full p-1 ${
                isActive
                  ? "bg-gradient-to-r from-[#00F0FF] to-[#E4FF4F] shadow-white text-transparent bg-clip-text"
                  : ""
              }`
            }
          >
            <ScanLine />
          </NavLink>

          {/* profile section */}
          <div
            className="border-l pl-4 border-gray-200 relative"
            ref={dropdownRef}
          >
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex gap-2 p-2 cursor-pointer transition-colors items-center group rounded-full hover:bg-[rgba(228,255,79,0.2)]"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", damping: "10", stiffness: "700" }}
              >
                <img
                  src={profileImage}
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 group-hover:shadow-lg border-white"
                />
              </motion.div>
              <p className="text-white group-hover:text-[#E4FF4F]">
                {userName}
              </p>
              <ChevronDown
                className={` text-gray-500 w-4 h-4 ${
                  profileDropdownOpen ? "rotate-180" : ""
                } transition-transform duration-300`}
              />
            </button>

            <AnimatePresence>
              {profileDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute cursor-pointer top-full w-72 mt-2 right-0 bg-white shadow-lg rounded-lg p-2"
                >
                  <div className="flex items-center p-4  w-fit flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <div className="relative group">
                        <img
                          src={profileImage}
                          alt="profile"
                          className="w-16 h-16 rounded-full shadow-lg border-2 group-hover:shadow-lg border-white"
                        />
                        <button
                          onClick={triggerFileInput}
                          className="absolute inset-0 flex  cursor-pointer items-center justify-center opacity-0 bg-black/50 rounded-full group-hover:opacity-100 transition-opacity opa duration-300 w-full h-full border-[#E4FF4F]"
                        >
                          <Camera className="w-5 h-5 text-black" />
                        </button>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          accept="image/*"
                          className="hidden"
                        />
                      </div>

                      <div className="">
                        <h3 className="text-black font-medium">{userName}</h3>
                        <p className="text-gray-500 text-sm">{userEmail}</p>
                      </div>
                    </div>

                    <div className="border-t-2 w-full  border-black/20">
                      <button
                        onClick={handleLogOut}
                        className="flex w-full text-sm mt-1  items-center gap-2 p-2 text-red-600 transition-colors rounded-md hover:bg-red-50  font-medium"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
