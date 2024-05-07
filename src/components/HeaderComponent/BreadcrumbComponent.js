import React ,{useState, useEffect} from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

// Import routes configuration
import { routes } from "../../routes/index";

const BreadcrumbComponent = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  const currentRoute = routes.find(route => route.path === location.pathname);
  const renderBreadcrumbItems = () => {
    if (!currentRoute) return null; // Return null if current route is not found in routes

    // Generate breadcrumb items based on routes
    const breadcrumbItems = currentRoute.path === "/" 
      ? [{ path: "/", title: "Trang chủ" }] // Only show "Trang chủ" if on the home page
      : [
          { path: "/", title: "Trang chủ" }, // Always include the home page
          { path: currentRoute.path, title: currentRoute.title }, // Current page
        ];

    return breadcrumbItems;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 961) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Custom itemRender function
  const itemRender = (route, params, routes, paths) => {
    const isLast = route.path === routes[routes.length - 1]?.path;
    const color = isLast ? "#84B12E" : "#5f5f5f"; // Change color based on whether it's the last item or not
    return isLast ? (
      <span style={{ color }}>{route.title}</span>
    ) : (
      <Link to={route.path} style={{ color }}>{route.title}</Link>
    );
  };

  return (
    <div className={` bg-[#f2f2f2] ${visible ? "" : "hidden"}`}>
      <Breadcrumb
        className="mx-auto max-w-7xl py-2 text-sm"
        itemRender={itemRender}
        items={renderBreadcrumbItems()}
        separator="/"
      />
    </div>
  );
};

export default BreadcrumbComponent;
