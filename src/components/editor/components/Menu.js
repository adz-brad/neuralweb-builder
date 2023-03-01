import React, { useState, useRef } from 'react'
import MenuButton from './menuButton'
import {
    MdOutlineAnalytics,
    MdOutlineFolderOpen,
    MdOutlineImageSearch,
    MdOutlineSimCardDownload,
    MdOutlineCloudDownload,
    MdShare,
    MdOutlineMenu,
    MdOutlineLiveHelp,
    MdOutlineLibraryBooks,
    MdOutlineMessage,
    MdSettingsOverscan,
    MdOutlineFormatPaint,
    MdOutlineScreenSearchDesktop,
    MdOutlineLibraryAdd,
    MdOutlineHelpCenter,
    MdOutlineCode,
    MdOutlineSettings,
    MdOutlineExtension,
    MdOutlineApps,
  } from "react-icons/md";
  import { IoLogoJavascript, IoLogoCss3, IoMdCode } from "react-icons/io";
  import { FaLaptopCode } from "react-icons/fa";
  import { VscJson, VscSettings } from "react-icons/vsc";
  import { useOutsideClick } from "../../../hooks";

    const Menu = ({ functions }) => {
  
    const MenuModal = () => {

        const Modal = ({ children, className }) => {
          return <div className={`menuModal ${className}`}>{children}</div>;
        };

        if (menuModal === "App") {
          return (
            <Modal>
              <MenuButton
                className="mx-2"
                onClick={() => console.log("File Explorer")}
                icon={<MdOutlineFolderOpen className="menuIcon" />}
                label="File Explorer"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Asset Manager")}
                icon={<MdOutlineImageSearch className="menuIcon" />}
                label="Asset Manager"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Save Project")}
                icon={<MdOutlineCloudDownload className="menuIcon" />}
                label="Save Project"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Export Project")}
                icon={<MdOutlineSimCardDownload className="menuIcon" />}
                label="Export Project"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Share Project")}
                icon={<MdShare className="menuIcon" />}
                label="Share Project"
              />
            </Modal>
          );
        } else if (menuModal === "Extensions") {
          return (
            <Modal>
              <MenuButton
                className="mx-2"
                onClick={() => console.log("SEO")}
                icon={<MdOutlineScreenSearchDesktop className="menuIcon" />}
                label="SEO"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Analytics")}
                icon={<MdOutlineAnalytics className="menuIcon" />}
                label="Analytics"
              />
            </Modal>
          );
        } else if (menuModal === "Injection") {
          return (
            <Modal>
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Custom Script")}
                icon={<IoMdCode className="menuIcon" />}
                label="Custom Script"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Custom JS")}
                icon={<IoLogoJavascript className="menuIcon" />}
                label="Custom Javascript"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Custom CSS")}
                icon={<IoLogoCss3 className="menuIcon" />}
                label="Custom CSS"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("JSON")}
                icon={<VscJson className="menuIcon" />}
                label="Custom JSON"
              />
            </Modal>
          );
        } else if (menuModal === "Config") {
          return (
            <Modal>
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Theme")}
                icon={<MdOutlineFormatPaint className="menuIcon" />}
                label="Theme"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Nav")}
                icon={<MdOutlineMenu className="menuIcon" />}
                label="Navigation"
              />
            </Modal>
          );
        } else if (menuModal === "Help") {
          return (
            <Modal>
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Dev On Demand")}
                icon={<FaLaptopCode className="menuIcon" />}
                label="Dev On Demand"
              />
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Documentation")}
                icon={<MdOutlineLibraryBooks className="menuIcon" />}
                label="Documentation"
              />
    
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Help Center")}
                icon={<MdOutlineLiveHelp className="menuIcon" />}
                label="Help Center"
              />
    
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Contact Us")}
                icon={<MdOutlineMessage className="menuIcon" />}
                label="Contact Us"
              />
            </Modal>
          );
        } else if (menuModal === "Settings") {
          return (
            <Modal>
              <MenuButton
                className="mx-2"
                onClick={() => console.log("Diplay")}
                icon={<MdSettingsOverscan className="menuIcon" />}
                label="Display"
              />
            </Modal>
          );
        } else {
          return null;
        }
      };


      const [menuModal, setMenuModal] = useState(null);

      const ref = useRef();

      useOutsideClick(ref, () => {
        if (menuModal !== null) {
          setMenuModal(null);
        }
      });

    return (
        <div ref={ref} className="editorSubMenu bg-gray-900">
          <div className="flex flex-row items-center">
            <div className="flex flex-col ml-4">
              <h1 className="editorHeader">Adrenalize</h1>
              <h2 className="editorSubheader">Live Editor</h2>
            </div>
          </div>
          <div
            ref={ref}
            className="relative flex flex-row items-center ml-6 mr-auto"
          >
            <MenuButton
              className="mx-2"
              onClick={() => setMenuModal("App")}
              icon={<MdOutlineApps className="menuIcon" />}
              label="App"
            />
            <MenuButton
              className="mx-2"
              onClick={() => functions.addElement()}
              icon={<MdOutlineLibraryAdd className="menuIcon" />}
              label="Add Section"
            />
            <MenuButton
              className="mx-2"
              onClick={() => setMenuModal("Extensions")}
              icon={<MdOutlineExtension className="menuIcon" />}
              label="Extensions"
            />
            <MenuButton
              className="mx-2"
              onClick={() => setMenuModal("Injection")}
              icon={<MdOutlineCode className="menuIcon" />}
              label="Injection"
            />
            <MenuButton
              className="mx-2"
              onClick={() => setMenuModal("Config")}
              icon={<MdOutlineSettings className="menuIcon" />}
              label="Config"
            />
          </div>
          <div className="flex flex-row items-center ml-auto mr-2">
            <MenuButton
              className="mx-2"
              onClick={() => setMenuModal("Help")}
              icon={<MdOutlineHelpCenter className="menuIcon" />}
              label="Help"
            />
            <MenuButton
              className="mx-2"
              onClick={() => setMenuModal("Settings")}
              icon={<VscSettings className="menuIcon" />}
              label="Settings"
            />
          </div>
          <MenuModal />
        </div>
    )
  }

  export default Menu