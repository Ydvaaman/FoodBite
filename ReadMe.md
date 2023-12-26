# Namaste React🚀✨
# ways to write code

<!-- this is written by using HTML -->
 <h1>Hello world!</h1>

 <!-- / this is written by using Javascript -->
 <script>   
       const heading = document.createElement("h1");
        heading.innerHTML = "Hello World from JavaScript!";

        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>

       

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm
- caching
- Bundling
- Compress
- Consistent Hashing



# Default Export/Import

export default Components;
import Component from "path";

# Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks
- A react hook is a normal javascript function which is given to us by react the only difference is that this is a utility function given by react to us.

There are 2 important hooks-
- useState()
- useEffect()



- useState() -  It is used to gave superpowerful state variables in react.

    - why it is called state variable?
      The useState is called the state variable because it mantain the state of your components.

Local State Variable - Super powerful variable 
const[listOfRestaurants] = useState([]);

Normal JS Variable
let listOfRestaurants = [];




Render:- whenever a state variable is update react re- render the component

