import { MultilevelMenu } from "react-multilevel-menu";

export default function MobileMenu() {
  const list = [
    {
      label: "logo",
      // faIcon: "fas fa-chevron-down",
      link: "/"

      // hrefTargetType: "_blank" // _blank|_self|_parent|_top|framename
    },
    {
      label: "About",
      // faIcon: "fas fa-chevron-down",
      activeImageIcon: "/ironman.jpg",
      link: "/"

      // hrefTargetType: "_blank" // _blank|_self|_parent|_top|framename
    },
    {
      label: "price",
      // faIcon: "fas fa-chevron-down",
      activeImageIcon: "/ironman.jpg",
      link: "/"
    },
    {
      label: "Log In",
      activeImageIcon: "/ironman.jpg",
      activeFaIcon: "fas fa-anchor",
      onSelected: function () {
        console.log("Item 3");
      }
    },
    {
      label: "Sign Out",
      link: "/item-4",
      activeImageIcon: "/ironman.jpg",

      // faIcon: "fab fa-accusoft",
      hidden: false
    }
  ];

  const selectedItem = (event) => {
    console.log(event);
  };

  const config = {
    paddingAtStart: true,
    classname: "my-custom-class",
    listBackgroundColor: `rgb(208, 241, 239)`,
    fontColor: `rgb(8, 54, 71)`,
    backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `red`,
    highlightOnSelect: true,
    useDividers: false
  };

  return (
    <MultilevelMenu
      list={list}
      configuration={config}
      selectedListItem={selectedItem}
      selectedLabel={selectedItem}
    />
  );
}
