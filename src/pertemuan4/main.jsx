import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import './tailwind.css';
import Responsive from "./Responsive";

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkListSearchFilter/> */}
            <Responsive/>
            {/* <FrameworkList/> */}
        </div>
    )