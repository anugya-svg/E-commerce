import React, { useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Switch ,useLocation} from "react-router-dom";


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}